define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Bootstrap Components';
            config.options.pushState = true;
            config.map([
                { route: ['', 'about'], name: 'about', moduleId: './pages/about/about', nav: true, title: 'About' },
                { route: ['components'], name: 'components', moduleId: './pages/components/components', nav: true, title: 'Bootstrap Components' }
            ]);
            config.mapUnknownRoutes("./");
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('layouts/document/document',["require", "exports"], function (require, exports) {
    "use strict";
    var Document = (function () {
        function Document() {
        }
        Document.prototype.activate = function (settings, nav) {
            this.settings = settings;
        };
        return Document;
    }());
    exports.Document = Document;
});



define("layouts/search-layout/search-layout", [],function(){});

define('pages/about/about',["require", "exports"], function (require, exports) {
    "use strict";
    var About = (function () {
        function About() {
        }
        return About;
    }());
    exports.About = About;
});

define('pages/components/components',["require", "exports"], function (require, exports) {
    "use strict";
    var Components = (function () {
        function Components() {
        }
        Components.prototype.configureRouter = function (config, router) {
            config.title = 'Components';
            config.options.pushState = true;
            config.map([
                { route: ['', 'daterangepicker'], name: 'daterangepicker', moduleId: '../../pages/daterangepicker/daterangepicker', nav: true, title: 'Daterangepicker', layoutViewModel: 'layouts/document/document' }
            ]);
            config.mapUnknownRoutes({ route: '*', redirect: '/about' });
            this.router = router;
        };
        return Components;
    }());
    exports.Components = Components;
});

define('pages/daterangepicker/daterangepicker',["require", "exports"], function (require, exports) {
    "use strict";
    var Daterangepicker = (function () {
        function Daterangepicker() {
        }
        return Daterangepicker;
    }());
    exports.Daterangepicker = Daterangepicker;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/bs-daterangepicker',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var BsDaterangepicker = (function () {
        function BsDaterangepicker() {
        }
        BsDaterangepicker.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], BsDaterangepicker.prototype, "value", void 0);
        return BsDaterangepicker;
    }());
    exports.BsDaterangepicker = BsDaterangepicker;
});

define('resources/elements/app-container/app-container',["require", "exports"], function (require, exports) {
    "use strict";
    var AppContainer = (function () {
        function AppContainer() {
        }
        return AppContainer;
    }());
    exports.AppContainer = AppContainer;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n  <require from=\"./resources/elements/app-container/app-container\"></require>\n  \n\n  <h1>${message}</h1>\n  <app-container>\n        <p>olllllllllllllo</p>\n        <router-view></router-view>\n  </app-container>\n\n</template>\n"; });
define('text!layouts/search-layout/search-layout.css', ['module'], function(module) { module.exports = ""; });
define('text!layouts/document/document.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n    <main>\r\n        <slot></slot>\r\n    </main>\r\n\r\n</template>"; });
define('text!pages/about/about.css', ['module'], function(module) { module.exports = ""; });
define('text!layouts/search-layout/search-layout.html', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/app-container/app-container.css', ['module'], function(module) { module.exports = "\r\n.app-frame {\r\n\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.app-frame__side-bar {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0px;\r\n    will-change: width\r\n}\r\n\r\n@media(min-width: 544px) {\r\n\r\n    .app-frame__side-bar {\r\n\r\n        width: 50px;\r\n    }\r\n    }\r\n\r\n.app-frame--side-bar-open .app-frame__side-bar {\r\n\r\n    width: 80%;\r\n    min-width: 200px;\r\n    max-width: 100%\r\n}\r\n\r\n@media(min-width: 544px) {\r\n\r\n    .app-frame--side-bar-open .app-frame__side-bar {\r\n\r\n        width: 200px;\r\n    }\r\n    }\r\n\r\n.app-frame__page {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.app-frame__mobile-nav {\r\n\r\n    position: absolute;\r\n    top: 50px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0\r\n}\r\n\r\n@media(min-width: 544px) {\r\n\r\n    .app-frame__mobile-nav {\r\n\r\n        top: 0px;\r\n    }\r\n    }"; });
define('text!pages/components/components.html', ['module'], function(module) { module.exports = "\r\n<template>\r\n     ullala\r\n    <aside>\r\n        <ul>\r\n            <li></li>\r\n        </ul>\r\n    </aside>\r\n\r\n    <router-view></router-view>\r\n\r\n</template>"; });
define('text!pages/about/about.html', ['module'], function(module) { module.exports = "<template>\r\n    <p>juhuuuuuu</p>\r\n</template>"; });
define('text!pages/daterangepicker/daterangepicker.html', ['module'], function(module) { module.exports = "\r\n<template>\r\n    <require from=\"resources/elements/bs-daterangepicker\"></require>\r\n\r\n    <h1>Daterangepicker Page</h1>\r\n    <bs-daterangepicker value=\"hello\"></bs-daterangepicker>\r\n\r\n</template>"; });
define('text!resources/elements/bs-daterangepicker.html', ['module'], function(module) { module.exports = "<template>\n  <h1>hey</h1>\n</template>"; });
define('text!resources/elements/app-container/app-container.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <div class=\"app-frame app-frame--open\">\r\n        \r\n        <div class=\"app-frame__side-nav\">\r\n\r\n            <div class=\"side-nav\">\r\n\r\n                <div class=\"side-nav__top\">\r\n                    <div class=\"logo\"></div>\r\n                    <div class=\"back-button\"></div>\r\n                    <div class=\"nav-links\">\r\n                        <a class=\"\">Home</a>\r\n                        <a>Favourites</a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"side-nav__bottom\">\r\n                    <div class=\"authentication\"></div>\r\n                    <div class=\"side-nav-toggle\"></div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"app-frame__page\">\r\n            \r\n            <div class=\"page\">\r\n                <div class=\"page__overlay\"></div>\r\n                <slot></slot>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"app-frame__mobile-nav\">\r\n            \r\n            <div class=\"mobile-nav__left\">\r\n                <div class=\"btn-icon btn-icon-side-nav-toggle\"></div>\r\n                <a class=\"btn-icon btn-icon-search\"></div>\r\n                <a class=\"btn-icon btn-icon-back\"></div>\r\n            </div>\r\n\r\n            <div class=\"mobile-nav__right\">\r\n                <div class=\"notifications\"></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map