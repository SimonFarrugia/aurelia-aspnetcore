import {bindable} from 'aurelia-framework';

export class PageHeader {

    @bindable public pageTitle: String;
    @bindable public pageActions: Array<Object>;

}