
export enum SideNavCommand {
    Open,
    Close,
    Toggle
}

export class ToggleSideNav {

  constructor(public command: SideNavCommand){}

}