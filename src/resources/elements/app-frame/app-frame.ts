import {inject, bindable} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {SideNavCommand, ToggleSideNav} from './messages';

@inject(Element, EventAggregator)
export class AppFrame {

    @bindable public pageData: Object;
    
    public sideNavOpen: Boolean

    constructor(public el: Element, public ea: EventAggregator) {
        
        ea.subscribe(ToggleSideNav, msg => {
            
            if(msg.command == SideNavCommand.Toggle){
                this.sideNavOpen = !this.sideNavOpen;
            }
            else if(msg.command == SideNavCommand.Open) {
                this.sideNavOpen = true;
            }
            else{
                this.sideNavOpen = false;
            }

        });

    }


    closeSideNav(){
        this.sideNavOpen = false;
    }
    
}