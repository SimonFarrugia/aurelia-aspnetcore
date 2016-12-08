import {bindable} from 'aurelia-framework';

export class PageHeader {

    @bindable public pageTitle: string;
    @bindable public pageActions: Array<Object>;

    
}