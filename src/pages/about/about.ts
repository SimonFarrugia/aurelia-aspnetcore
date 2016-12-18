import {inject, bindable} from "aurelia-framework";
import {INotificationService, NotificationType} from 'services/INotificationService'

@inject(INotificationService)
export class About {
    
    public actions = [
        { title: "About1" },
        { title: "About2" }
    ];

    constructor(notificationService: INotificationService) {
        notificationService.notify({ type: NotificationType.info, message: "hello"});
    }
}