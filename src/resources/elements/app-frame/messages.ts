
export enum AppDrawerCommandType {
    Open,
    Close,
    Toggle
}

 export class AppDrawerCommand {

  constructor(public command: AppDrawerCommandType) {}

}

export enum AppDrawerEventType {
    Opened,
    Closed
}

export class AppDrawerEvent {

    constructor(public event: AppDrawerEventType) {}
}