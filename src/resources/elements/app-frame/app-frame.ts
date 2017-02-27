import {inject, bindable} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {AppDrawerCommandType, AppDrawerCommand} from './messages';
import {Notification} from 'services/NotificationService';

@inject(Element, EventAggregator)
export class AppFrame {

    @bindable public pageData: Object;
    
    public appDrawerOpen: Boolean

    public navList: Array<Object> = [
        { title: "About", icon: "/images/drawer/menu-icons/person.svg", route: "about" },
        { title: "Components", icon: "/images/drawer/menu-icons/star.svg", route: "components" }
    ]

    constructor(public el: Element, public ea: EventAggregator) {
        
        ea.subscribe(AppDrawerCommand, msg => {
            
            if(msg.command == AppDrawerCommandType.Toggle){
                this.appDrawerOpen = !this.appDrawerOpen;
            }
            else if(msg.command == AppDrawerCommandType.Open) {
                this.appDrawerOpen = true;
            }
            else{
                this.appDrawerOpen = false;
            }

        });

        ea.subscribe(Notification, (noti: Notification) => {

            alert(noti.message);
        });

    }


    closeSideNav(){
        this.appDrawerOpen = false;
    }

    
    toggle() {

        this.appDrawerOpen = !this.appDrawerOpen;
    }
    
}