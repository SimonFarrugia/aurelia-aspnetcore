import {inject, bindable} from "aurelia-framework";

@inject(Element)
export class AppDrawer {

    @bindable public open: Boolean;

    public navList: Array<Object> = [
        { title: "About", icon: "", route: "about" },
        { title: "Components", icon: "", route: "components" }
    ]

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