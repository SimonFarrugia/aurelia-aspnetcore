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
                var view = this.pageViewModel && this.pageViewModel.view || null;
                return view ? view.controller.viewModel : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "currentPageData", {
            get: function () {
                var title = this.router.currentInstruction && this.router.currentInstruction.config.title || "";
                var viewModel = this.currentRouteViewModel;
                return {
                    title: title,
                    viewModel: viewModel
                };
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

define('resources/elements/app-frame/messages',["require", "exports"], function (require, exports) {
    "use strict";
    (function (SideNavCommand) {
        SideNavCommand[SideNavCommand["Open"] = 0] = "Open";
        SideNavCommand[SideNavCommand["Close"] = 1] = "Close";
        SideNavCommand[SideNavCommand["Toggle"] = 2] = "Toggle";
    })(exports.SideNavCommand || (exports.SideNavCommand = {}));
    var SideNavCommand = exports.SideNavCommand;
    var ToggleSideNav = (function () {
        function ToggleSideNav(command) {
            this.command = command;
        }
        return ToggleSideNav;
    }());
    exports.ToggleSideNav = ToggleSideNav;
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
define('resources/elements/app-frame/app-frame',["require", "exports", "aurelia-framework", 'aurelia-event-aggregator', './messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
    var AppFrame = (function () {
        function AppFrame(el, ea) {
            var _this = this;
            this.el = el;
            this.ea = ea;
            ea.subscribe(messages_1.ToggleSideNav, function (msg) {
                if (msg.command == messages_1.SideNavCommand.Toggle) {
                    _this.sideNavOpen = !_this.sideNavOpen;
                }
                else if (msg.command == messages_1.SideNavCommand.Open) {
                    _this.sideNavOpen = true;
                }
                else {
                    _this.sideNavOpen = false;
                }
            });
        }
        AppFrame.prototype.closeSideNav = function () {
            this.sideNavOpen = false;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], AppFrame.prototype, "pageData", void 0);
        AppFrame = __decorate([
            aurelia_framework_1.inject(Element, aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [Element, aurelia_event_aggregator_1.EventAggregator])
        ], AppFrame);
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
define('resources/elements/app-frame/app-header/app-header',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var AppHeader = (function () {
        function AppHeader() {
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], AppHeader.prototype, "pageTitle", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Array)
        ], AppHeader.prototype, "pageActions", void 0);
        return AppHeader;
    }());
    exports.AppHeader = AppHeader;
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
define('resources/elements/app-frame/app-mobile-nav/app-mobile-nav',["require", "exports", "aurelia-framework", 'aurelia-event-aggregator', '../messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
    var AppMobileNav = (function () {
        function AppMobileNav(ea) {
            this.ea = ea;
        }
        AppMobileNav.prototype.toggleSideNav = function () {
            this.ea.publish(new messages_1.ToggleSideNav(messages_1.SideNavCommand.Toggle));
        };
        AppMobileNav = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], AppMobileNav);
        return AppMobileNav;
    }());
    exports.AppMobileNav = AppMobileNav;
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
define('resources/elements/app-frame/app-side-nav/app-side-nav',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var AppSideNav = (function () {
        function AppSideNav(el) {
            this.el = el;
        }
        AppSideNav.prototype.openChanged = function (newValue, oldValue) {
            if (newValue) {
                this.el.setAttribute("open", "");
            }
            else {
                this.el.removeAttribute("open");
            }
        };
        AppSideNav.prototype.toggle = function () {
            this.open = !this.open;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], AppSideNav.prototype, "open", void 0);
        AppSideNav = __decorate([
            aurelia_framework_1.inject(Element), 
            __metadata('design:paramtypes', [Element])
        ], AppSideNav);
        return AppSideNav;
    }());
    exports.AppSideNav = AppSideNav;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <require from=\"./resources/elements/app-frame/app-frame\"></require>\r\n  <require from=\"./app.css\"></require>\r\n\r\n  <app-frame class=\"my-app-frame\" page-data.bind=\"currentPageData\">\r\n        \r\n        <router-view view-model.ref=\"pageViewModel\"></router-view>\r\n        \r\n  </app-frame>\r\n\r\n</template>\r\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "\r\nhtml, body {\r\n\r\n    width:100%;\r\n    height:100%;\r\n    padding: 0px;\r\n    margin:0px;\r\n    \r\n}\r\n\r\n.my-app-frame {\r\n\r\n    width:100%;\r\n    height:100%;\r\n\r\n}"; });
define('text!layouts/test-layout.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <div class=\"na\">nanana</div>\r\n    <slot></slot>\r\n</template>"; });
define('text!pages/about/about.css', ['module'], function(module) { module.exports = ""; });
define('text!layouts/document/document.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n    <main>\r\n        <slot></slot>\r\n    </main>\r\n\r\n</template>"; });
define('text!layouts/search-layout/search-layout.css', ['module'], function(module) { module.exports = ""; });
define('text!pages/about/about.html', ['module'], function(module) { module.exports = "<template>\r\n    <p>juhuuuuuu</p>\r\n</template>"; });
define('text!resources/elements/app-frame/app-frame-breakpoints.css', ['module'], function(module) { module.exports = ""; });
define('text!layouts/search-layout/search-layout.html', ['module'], function(module) { module.exports = ""; });
define('text!pages/components/components.html', ['module'], function(module) { module.exports = "\r\n<template>\r\n     ullala\r\n    <aside>\r\n        \r\n    </aside>\r\n\r\n    <router-view></router-view>\r\n\r\n</template>"; });
define('text!pages/daterangepicker/daterangepicker.html', ['module'], function(module) { module.exports = "\r\n<template>\r\n    <!--<require from=\"resources/elements/bs-daterangepicker\"></require>-->\r\n\r\n    <h1>Daterangepicker Page</h1>\r\n    <!--<bs-daterangepicker value=\"hello\"></bs-daterangepicker>-->\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-frame.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <require from=\"./app-frame.css\" as=\"scoped\"></require>\r\n    <require from=\"./app-header/app-header\"></require>\r\n    <require from=\"./app-side-nav/app-side-nav\"></require>\r\n    <require from=\"./app-mobile-nav/app-mobile-nav\"></require>\r\n\r\n    <div class=\"app-frame-container\">\r\n        \r\n        <app-side-nav class=\"app-frame__side-nav\" open.bind=\"sideNavOpen\"></app-side-nav>\r\n         \r\n        <div class=\"app-frame__body\">\r\n            \r\n            <app-header class=\"app-frame__body__header\" page-title.bind=\"pageData.title\" page-actions.bind=\"pageData.actions\"></app-header>\r\n            \r\n            <div class=\"app-frame__body__page\">\r\n                <slot></slot>\r\n            </div>\r\n\r\n            <app-mobile-nav class=\"app-frame__body__mobile-nav\"></app-mobile-nav>\r\n\r\n            <div class=\"app-frame__body__overlay\" click.trigger=\"closeSideNav()\"></div>\r\n\r\n        </div>\r\n    \r\n    </div>\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-header/app-header.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <require from=\"./app-header.css\" as=\"scoped\"></require>\r\n\r\n    <header class=\"app-header-container\">\r\n\r\n        <div class=\"app-header__title\">${pageTitle}</div>\r\n\r\n        <ul if.bind=\"pageActions != null\">\r\n\r\n            <li repeat.for=\"action of pageActions\">\r\n                ${action.title}\r\n            </li>\r\n\r\n        </ul>\r\n\r\n    </header>\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-frame.css', ['module'], function(module) { module.exports = "\r\n.app-frame-container {\r\n\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.app-frame__side-nav {\r\n \r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n\r\n    max-width: 80%;\r\n}\r\n.app-frame__body {\r\n\r\n    position: relative;\r\n    margin-left: 0px;\r\n    height: 100%;\r\n\r\n    overflow: hidden\r\n}\r\n@media(min-width: 544px) {\r\n    .app-frame__body {\r\n\r\n        margin-left: 50px;\r\n    }\r\n    }\r\n.app-frame__side-nav[open] + .app-frame__body {\r\n}\r\n@media(min-width: 992px) {\r\n    .app-frame__side-nav[open] + .app-frame__body {\r\n\r\n        margin-left: 250px;\r\n    }\r\n    }\r\n.app-frame__body__overlay {\r\n    \r\n    position:absolute;\r\n    top:0px;\r\n    left:0px;\r\n    bottom:0px;\r\n    right:0px;\r\n    display: none;\r\n}\r\n.app-frame__side-nav[open] + .app-frame__body > .app-frame__body__overlay {\r\n\r\n    display: block\r\n}\r\n@media(min-width: 992px) {\r\n    .app-frame__side-nav[open] + .app-frame__body > .app-frame__body__overlay {\r\n\r\n        display: none;\r\n    }\r\n    }\r\n.app-frame__body__header {\r\n    \r\n    position: absolute;\r\n    top:0px;\r\n    width:100%;\r\n}\r\n.app-frame__body__page {\r\n\r\n    position: absolute;\r\n    top: 50px;\r\n    bottom: 50px;\r\n    width: 100%\r\n}\r\n@media(min-width: 544px) {\r\n    .app-frame__body__page {\r\n\r\n        bottom: 0px;\r\n    }\r\n    }\r\n.app-frame__body__mobile-nav {\r\n\r\n    position: absolute;\r\n    height: 50px;\r\n    bottom: 0px;\r\n    width:100%\r\n}\r\n@media(min-width: 544px) {\r\n    .app-frame__body__mobile-nav {\r\n\r\n        bottom: -50px;\r\n    }\r\n    }\r\n.app-frame__body {\r\n    background-color: #FAFAFA;\r\n    -webkit-transition: margin-left 0.2s;\r\n    transition: margin-left 0.2s;\r\n}\r\n.app-frame__body__mobile-nav {\r\n    background-color: #fff;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),0 3px 1px -2px rgba(0, 0, 0, .2),0 1px 5px 0 rgba(0, 0, 0, .12);\r\n    -webkit-transition: bottom 0.2s;;\r\n    transition: bottom 0.2s;\r\n}"; });
define('text!resources/elements/app-frame/app-header/app-header.css', ['module'], function(module) { module.exports = "\r\n\r\n.app-header-container {\r\n     height: 50px;\r\n}\r\n\r\n.app-header__page-title {\r\n\r\n}\r\n\r\n.app-header__page-actions {\r\n\r\n\r\n}\r\n\r\n.app-header-container {\r\n    background-color: #fff;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),0 3px 1px -2px rgba(0, 0, 0, .2),0 1px 5px 0 rgba(0, 0, 0, .12);\r\n}"; });
define('text!resources/elements/app-frame/app-mobile-nav/app-mobile-nav.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <div class=\"mobile-nav\">\r\n        \r\n        <div class=\"mobile-nav__left\">\r\n            <div class=\"btn-icon btn-icon-side-nav-toggle\" click.trigger=\"toggleSideNav()\">ooo</div>\r\n            <a class=\"btn-icon btn-icon-search\"></div>\r\n            <a class=\"btn-icon btn-icon-back\"></div>\r\n        </div>\r\n\r\n        <div class=\"mobile-nav__right\">\r\n            <div class=\"notifications\"></div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-mobile-nav/app-mobile-nav.css', ['module'], function(module) { module.exports = ""; });
define('text!resources/elements/app-frame/app-side-nav/app-side-nav.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n    <require from=\"./app-side-nav.css\" as=\"scoped\"></require>\r\n\r\n    <div class=\"side-nav-container\">\r\n\r\n        <div class=\"side-nav__top\">\r\n            <div class=\"logo\"></div>\r\n            <div class=\"back-button\"></div>\r\n            <div class=\"nav-links\">\r\n                <a class=\"\">Home</a>\r\n                <a>Favourites</a>\r\n                <a route-href=\"route: components\">components link</a>\r\n                <a route-href=\"route: about\">about link</a>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"side-nav__bottom\">\r\n            <div class=\"authentication\"></div>\r\n            <div class=\"side-nav-toggle\" click.delegate=\"toggle()\">toggle</div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</template>"; });
define('text!resources/elements/app-frame/app-side-nav/app-side-nav.css', ['module'], function(module) { module.exports = "\r\n.side-nav-container {\r\n    \r\n    height: 100%;\r\n    width: 0px;\r\n    will-change: width\r\n}\r\n@media(min-width: 544px) {\r\n    .side-nav-container {\r\n    \r\n        width: 50px\r\n    }\r\n    }\r\n[open] > .side-nav-container {\r\n\r\n    width: 100%\r\n}\r\n@media(min-width: 544px) {\r\n    [open] > .side-nav-container {\r\n    \r\n        width: 250px\r\n    }\r\n    }\r\n.side-nav-container {\r\n    background-color: #fff;\r\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14),0 1px 10px 0 rgba(0, 0, 0, .12),0 2px 4px -1px rgba(0, 0, 0, .2);\r\n    -webkit-transition: width 0.2s, max-width 0.2s, min-width 0.2s;\r\n    transition: width 0.2s, max-width 0.2s, min-width 0.2s;\r\n}"; });
//# sourceMappingURL=app-bundle.js.map