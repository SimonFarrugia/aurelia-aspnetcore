import {bindable} from 'aurelia-framework';

export class AppHeader {

    @bindable public pageTitle: String;
    @bindable public pageActions: Array<Object>;

}