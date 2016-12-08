import {Router, RouterConfiguration} from 'aurelia-router';

export class AppPage{

    
    public router: Router;

    public configureRouter(config: RouterConfiguration, router: Router){

        config.title = 'Bootstrap Components';
        config.options.pushState = true;
        config.map([
            { route: ['', 'about'],     name: 'about',            moduleId: './pages/about/about',            nav: true,  title: 'About' },
            { route: ['components'],     name: 'components',            moduleId: './pages/components/components',            nav: true,  title: 'Bootstrap Components' }
        ]);

        config.mapUnknownRoutes("./");

        this.router = router;
    }

    public pageViewModel: Object;
}