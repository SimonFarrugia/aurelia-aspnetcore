
import {NavigationInstruction} from 'aurelia-router';

interface DocumentLayoutSettings {

    

}

export class Document {

    public settings: DocumentLayoutSettings

    constructor() {

    }

    activate(settings: DocumentLayoutSettings, nav: NavigationInstruction ) {
        this.settings = settings;
    }

}