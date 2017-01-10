import {bindable, containerless, customElement, inject, inlineView} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@containerless()
@inlineView('<template></template>')
@customElement('inline-svg')
@inject(Element, HttpClient)
export class InlineSvg {
    @bindable svg;

    private el: HTMLElement;
    private http: HttpClient;

    constructor(el: HTMLElement, http: HttpClient) {
        this.el = el;
        this.http = http;
    }

    svgChanged(svg) {
        if (svg) {
            this.http.fetch(`${svg}`)
                .then(response => response.text())
                .then(response => this.el.parentElement.innerHTML = response);
        }
    }

}