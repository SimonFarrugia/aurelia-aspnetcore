import {inject} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {AppDrawerCommandType, AppDrawerCommand} from '../messages';

@inject(EventAggregator)
export class AppMobileNav{
    
    constructor(public ea: EventAggregator) {}

    toggleSideNav() {
        this.ea.publish(new AppDrawerCommand(AppDrawerCommandType.Toggle));
    }
}