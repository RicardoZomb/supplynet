import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

import { FormWrapperOptions } from './form-wrapper-options';
import { PublicFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: 'form-wrapper.component.html'
})
export class FormWrapperComponent implements OnInit {
  @Input() public title?: string;
  @Input() public formClass?: string;

  constructor() { }

  public ngOnInit(): void {
    this.initDefaultProperties();
  }

  public initDefaultProperties(): void {
    this.title = !_.isUndefined(this.title) ? this.title : FormWrapperOptions.TITLE;
    this.formClass = !_.isUndefined(this.formClass) ? this.title : FormWrapperOptions.CLASS;
  }
}
