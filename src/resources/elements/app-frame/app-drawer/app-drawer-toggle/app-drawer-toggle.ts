import {inject, bindable} from "aurelia-framework";
import s from "svg.js";

@inject(Element)
export class AppDrawerToggle {

    @bindable public open: Boolean; 

    constructor(public element: Element) { }

    openChanged(newValue: boolean, oldValue: Boolean) {
        
        let svgElement: svgjs.Element = s.select("svg", this.element as HTMLElement)

        if(newValue) {
            
        }
        else {

        }
    }

}