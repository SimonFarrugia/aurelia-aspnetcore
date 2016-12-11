import {inject, bindable} from "aurelia-framework";

@inject(Element)
export class AppSideNav {

    @bindable public open: Boolean;


    constructor(public el: Element) {
        
    }

    
    openChanged(newValue: boolean, oldValue: Boolean) {

        if(newValue) {
            this.el.setAttribute("open", "");
        }
        else{
            this.el.removeAttribute("open");
        }
    }
    

    toggle() {

        this.open = !this.open;
    }
}