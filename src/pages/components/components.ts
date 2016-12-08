import {Router, RouterConfiguration, RouteConfig} from 'aurelia-router';


export class Components {

    public router: Router
    
    public configureRouter(config: RouterConfiguration, router: Router){

        config.title = 'Components';
        config.options.pushState = true;
        config.map([
            { route: ['', 'daterangepicker'],     name: 'daterangepicker',  moduleId: '../../pages/daterangepicker/daterangepicker',    nav: true,  title: 'Daterangepicker', layoutViewModel: 'layouts/document/document' }
        ]);

        config.mapUnknownRoutes({ route: '*', redirect: '/about' });

        this.router = router;
    }
        

    public actions = [
        { title: "comp1" },
        { title: "Comp2" }
    ];

    constructor() {

    }
}