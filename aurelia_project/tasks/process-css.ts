import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as sourcemaps from 'gulp-sourcemaps';
import * as postcss from 'gulp-postcss';
// import * as autoprefixer from 'autoprefixer';
import * as cssnext from 'postcss-cssnext';
import * as use from 'postcss-use';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {

  //We are applying cssnext on all files to polyfill future css syntax by default
  //And using postcss-use we also allow individual css files to declare their own css processors dependecies (example: SCSS)
  let processors = [
    //autoprefixer({browsers: ['last 1 version']}),
    cssnext(), //includes autoprefixer
    use({ resolveFromFile: true, modules: '*' })
  ];

  return gulp.src(project.cssProcessor.source)
    .pipe(changedInPlace({firstPass:true}))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(build.bundle());
};
