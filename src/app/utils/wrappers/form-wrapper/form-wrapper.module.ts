import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FormWrapperComponent } from './form-wrapper.component';

@NgModule({
  declarations: [FormWrapperComponent],
  exports: [FormWrapperComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class FormWrapperModule { }
