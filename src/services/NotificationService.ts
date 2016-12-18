import {inject, bindable} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {INotificationService, INotification, NotificationType} from './INotificationService'

export class Notification implements INotification {
    public type: NotificationType;
    public message: String;

    constructor(type: NotificationType, message: String) {
        this.type = type;
        this.message = message;
    }
}

@inject(EventAggregator)
export class NotificationService implements INotificationService {

    constructor(public ea: EventAggregator) {
        
    }

    public notify(notification: INotification) {

        this.ea.publish(new Notification(notification.type, notification.message));
    }
}