import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {Container} from 'aurelia-dependency-injection';
import {INotificationService} from './services/INotificationService'
import {NotificationService} from './services/NotificationService'

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  
  Container.instance.registerSingleton(INotificationService, NotificationService);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
