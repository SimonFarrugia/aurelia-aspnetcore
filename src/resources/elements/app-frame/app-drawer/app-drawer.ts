import {inject, bindable} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {AppDrawerEventType, AppDrawerEvent} from '../messages';

@inject(Element, EventAggregator)
export class AppDrawer {

    @bindable public open: Boolean;

    constructor(public el: Element, public ea: EventAggregator) {
        
    }
    
    openChanged(newValue: boolean, oldValue: Boolean) {

        //Set Html open attribute
        if(newValue) {
            this.el.setAttribute("open", "");
        }
        else{
            this.el.removeAttribute("open");
        }

        //Fire event
        if(newValue) {
            this.ea.publish(new AppDrawerEvent(AppDrawerEventType.Opened))
        }
        else{
            this.ea.publish(new AppDrawerEvent(AppDrawerEventType.Closed))
        }
        
    }
    
}