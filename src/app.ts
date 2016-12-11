import {Router, RouterConfiguration} from 'aurelia-router';

export class App {

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


  public pageViewModel: any;
  
  constructor() {
    
  }

  get currentRouteViewModel() {
      const view = this.pageViewModel && this.pageViewModel.view || null;

      // The view property can be null at first
      return view ? view.controller.viewModel : null;
  }

  // get routeActions() {
  //     return this.currentRouteViewModel && this.currentRouteViewModel.actions || [];
  // }

  get currentPageData() {

    let title = this.router.currentInstruction && this.router.currentInstruction.config.title || "";
    let viewModel = this.currentRouteViewModel;

    return {
      title: title,
      viewModel: viewModel
    };
  }

  message = 'Hello World!';
}
