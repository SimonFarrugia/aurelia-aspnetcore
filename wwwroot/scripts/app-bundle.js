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
        Object.defineProperty(App.prototype, "currentRouteViewModel", {
            get: function () {
                var view = this.pageViewModel.view;
                return view ? view.controller.viewModel : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "routeActions", {
            get: function () {
                return this.currentRouteViewModel && this.currentRouteViewModel.actions || [];
            },
            enumerable: true,
            configurable: true
        });
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
            this.actions = [
                { title: "About1" },
                { title: "About2" }
            ];
        }
        return About;
    }());
    exports.About = About;
});

define('pages/components/components',["require", "exports"], function (require, exports) {
    "use strict";
    var Components = (function () {
        function Components() {
            this.actions = [
                { title: "comp1" },
                { title: "Comp2" }
            ];
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

define('resources/elements/app-frame/app-frame',["require", "exports"], function (require, exports) {
    "use strict";
    var AppFrame = (function () {
        function AppFrame() {
        }
        return AppFrame;
    }());
    exports.AppFrame = AppFrame;
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
define('resources/elements/page-header/page-header',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var PageHeader = (function () {
        function PageHeader() {
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], PageHeader.prototype, "pageTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Array)
        ], PageHeader.prototype, "pageActions", void 0);
        return PageHeader;
    }());
    exports.PageHeader = PageHeader;
});

define('resources/elements/app-frame/app-side-nav/app-side-nav',["require", "exports"], function (require, exports) {
    "use strict";
    var AppSideNav = (function () {
        function AppSideNav() {
        }
        AppSideNav.prototype.toggle = function () {
            var appFrame = document.querySelector('app-frame');
            var className = ' ' + appFrame.className + ' ';
            appFrame.className = ~className.indexOf(' app-frame--side-nav-open ') ?
                className.replace(' app-frame--side-nav-open ', ' ') :
                appFrame.className + ' app-frame--side-nav-open';
        };
        return AppSideNav;
    }());
    exports.AppSideNav = AppSideNav;
});

define('resources/elements/app-frame/app-mobile-nav/app-mobile-nav',["require", "exports"], function (require, exports) {
    "use strict";
    var AppMobileNav = (function () {
        function AppMobileNav() {
        }
        return AppMobileNav;
    }());
    exports.AppMobileNav = AppMobileNav;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <require from=\"./resources/elements/app-frame/app-frame\"></require>\r\n  <require from=\"./resources/elements/page-header/page-header\"></require>\r\n  <require from=\"./app.css\"></require>\r\n\r\n  <app-frame class=\"my-app-frame\">\r\n        \r\n        <page-header page-title.bind=\"router.currentInstruction.config.title\" page-actions.bind=\"routeActions\"></page-header>\r\n        <router-view view-model.ref=\"pageViewModel\"></router-view>\r\n        \r\n  </app-frame>\r\n\r\n</template>\r\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "\r\nhtml, body {\r\n\r\n    width:100%;\r\n    height:100%;\r\n    padding: 0px;\r\n    margin:0px;\r\n    \r\n}\r\n\r\n.my-app-frame {\r\n\r\n    width:100%;\r\n    height:100%;\r\n\r\n}"; });
define('text!layouts/test-layout.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <div class=\"na\">nanana</div>\r\n    <slot></slot>\r\n</template>"; });
define('text!layouts/search-layout/search-layout.css', ['module'], function(module) { module.exports = ""; });
define('text!layouts/document/document.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n    <main>\r\n        <slot></slot>\r\n    </main>\r\n\r\n</template>"; });
define('text!pages/about/about.css', ['module'], function(module) { module.exports = ""; });
define('text!layouts/search-layout/search-layout.html', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/app-frame/app-frame-breakpoints.css', ['module'], function(module) { module.exports = ""; });
define('text!pages/components/components.html', ['module'], function(module) { module.exports = "\r\n<template>\r\n     ullala\r\n    <aside>\r\n        \r\n    </aside>\r\n\r\n    <router-view></router-view>\r\n\r\n</template>"; });
define('text!pages/about/about.html', ['module'], function(module) { module.exports = "<template>\r\n    <p>juhuuuuuu</p>\r\n</template>"; });
define('text!pages/daterangepicker/daterangepicker.html', ['module'], function(module) { module.exports = "\r\n<template>\r\n    <!--<require from=\"resources/elements/bs-daterangepicker\"></require>-->\r\n\r\n    <h1>Daterangepicker Page</h1>\r\n    <!--<bs-daterangepicker value=\"hello\"></bs-daterangepicker>-->\r\n\r\n</template>"; });
define('text!resources/elements/bs-daterangepicker.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>hey</h1>\r\n</template>"; });
define('text!resources/elements/app-frame/app-frame.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <require from=\"./app-frame.css\" as=\"scoped\"></require>\r\n    <require from=\"./app-side-nav/app-side-nav\"></require>\r\n    <require from=\"./app-mobile-nav/app-mobile-nav\"></require>\r\n\r\n    <div class=\"app-frame-container\">\r\n        \r\n        <div class=\"app-frame__page\">\r\n            \r\n            <slot></slot>\r\n\r\n        </div>\r\n\r\n        <div class=\"app-frame__mobile-nav\">\r\n            \r\n            <app-mobile-nav></app-mobile-nav>\r\n\r\n        </div>\r\n\r\n        <div class=\"app-frame__side-nav-underlay\"></div>\r\n\r\n        <div class=\"app-frame__side-nav\">\r\n\r\n            <app-side-nav></app-side-nav>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-frame.css', ['module'], function(module) { module.exports = "\r\n.app-frame-container {\r\n\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.app-frame__side-nav {\r\n \r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0px;\r\n    will-change: width\r\n}\r\n@media(min-width: 544px) {\r\n    .app-frame__side-nav {\r\n\r\n        width: 50px;\r\n    }\r\n    }\r\n.app-frame--side-nav-open .app-frame__side-nav {\r\n\r\n    width: 80%;\r\n    /*min-width: 200px;*/\r\n    max-width: 100%\r\n}\r\n@media(min-width: 544px) {\r\n    .app-frame--side-nav-open .app-frame__side-nav {\r\n\r\n        width: 200px;\r\n    }\r\n    }\r\n.app-frame__page {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0\r\n}\r\n@media(min-width: 544px) {\r\n    .app-frame__page {\r\n\r\n        left: 50px;\r\n    }\r\n    }\r\n.app-frame--side-nav-open .app-frame__page {\r\n}\r\n@media(min-width: 1200px) {\r\n    .app-frame--side-nav-open .app-frame__page {\r\n\r\n        left: 200px;\r\n    }\r\n    }\r\n.app-frame__mobile-nav {\r\n\r\n    position: absolute;\r\n    height: 50px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0\r\n}\r\n@media(min-width: 544px) {\r\n    .app-frame__mobile-nav {\r\n\r\n        height: 0px;\r\n    }\r\n    }\r\n.app-frame__page {\r\n    background-color: red;\r\n    -webkit-transition: bottom 0.3s, top 0.3s, left 0.3s, right 0.3s;\r\n    transition: bottom 0.3s, top 0.3s, left 0.3s, right 0.3s;\r\n}\r\n.app-frame__side-nav {\r\n    background-color: blue;\r\n    -webkit-transition: width 0.3s, max-width 0.3s, min-width 0.3s;\r\n    transition: width 0.3s, max-width 0.3s, min-width 0.3s;\r\n}\r\n.app-frame__mobile-nav {\r\n    background-color: green;\r\n    -webkit-transition: height 0.3s;\r\n    transition: height 0.3s;\r\n}"; });
define('text!resources/elements/page-header/page-header.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/page-header/page-header.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <header class=\"page-header\">\r\n\r\n        <div class=\"page-header__title\">${pageTitle}</div>\r\n\r\n        <ul if.bind=\"pageActions != null\">\r\n\r\n            <li repeat.for=\"action of pageActions\">\r\n                ${action.title}\r\n            </li>\r\n\r\n        </ul>\r\n\r\n    </header>\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-mobile-nav/app-mobile-nav.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/app-frame/app-side-nav/app-side-nav.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/app-frame/app-mobile-nav/app-mobile-nav.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <div class=\"mobile-nav\">\r\n        \r\n        <div class=\"mobile-nav__left\">\r\n            <div class=\"btn-icon btn-icon-side-nav-toggle\"></div>\r\n            <a class=\"btn-icon btn-icon-search\"></div>\r\n            <a class=\"btn-icon btn-icon-back\"></div>\r\n        </div>\r\n\r\n        <div class=\"mobile-nav__right\">\r\n            <div class=\"notifications\"></div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-side-nav/app-side-nav.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <div class=\"side-nav\">\r\n\r\n        <div class=\"side-nav__top\">\r\n            <div class=\"logo\"></div>\r\n            <div class=\"back-button\"></div>\r\n            <div class=\"nav-links\">\r\n                <a class=\"\">Home</a>\r\n                <a>Favourites</a>\r\n                <a route-href=\"route: components\">components link</a>\r\n                <a route-href=\"route: about\">about link</a>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"side-nav__bottom\">\r\n            <div class=\"authentication\"></div>\r\n            <div class=\"side-nav-toggle\" click.delegate=\"toggle()\">toggle</div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map