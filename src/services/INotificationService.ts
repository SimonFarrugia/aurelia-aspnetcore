
export enum NotificationType {
    info,
    success,
    warning,
    error
}

export interface INotification {

    type: NotificationType
    message: String
}

export interface INotificationService {

    notify(notification: INotification)
}

/** DI keys */
export const INotificationService = {};
export const INotification = {};