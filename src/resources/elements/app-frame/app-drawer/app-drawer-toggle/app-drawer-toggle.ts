import {inject, bindable} from "aurelia-framework";
import * as SVG from "svg.js";

@inject(Element)
export class AppDrawerToggle {

    @bindable public open: Boolean; 

    constructor(public element: Element) { }

    openChanged(newValue: boolean, oldValue: Boolean) {
        
        //let svg:svgjs.Library = (SVG.default || SVG) as svgjs.Library;

        let svgElement: SVG.Element = SVG.select("svg path", this.element as HTMLElement)

        if(newValue) {
            svgElement.attr({ d: 'M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z' });
        }
        else {
            svgElement.attr({ d: 'M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' });
        }
    }

    created() {

        //let svg:svgjs.Library = (SVG.default || SVG) as svgjs.Library;

        let svgElement = SVG(this.element as HTMLElement);
        svgElement.viewbox(new SVG.ViewBox([0, 0, 8, 8]));
        svgElement.path("M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z");
        svgElement.transform("translate(1)");

    }

}