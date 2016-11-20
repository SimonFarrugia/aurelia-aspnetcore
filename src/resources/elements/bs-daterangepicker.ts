import {bindable} from 'aurelia-framework';
import * as $ from 'jquery';
import * as daterangepicker from 'daterangepicker';

export class BsDaterangepicker {
  @bindable value;

  constructor() {
    //$("").daterangepicker();
  }

  valueChanged(newValue, oldValue) {

  }
}

