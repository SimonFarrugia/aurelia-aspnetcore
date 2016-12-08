
export class AppSideNav {

    toggle() {

            var appFrame = document.querySelector('app-frame');
            var className = ' ' + appFrame.className + ' ';

            appFrame.className = ~className.indexOf(' app-frame--side-nav-open ') ?
                                className.replace(' app-frame--side-nav-open ', ' ') :
                                appFrame.className + ' app-frame--side-nav-open';

    }
}