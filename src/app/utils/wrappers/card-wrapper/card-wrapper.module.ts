import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { CardWrapperComponent } from './card-wrapper.component';

@NgModule({
  declarations: [CardWrapperComponent],
  exports: [CardWrapperComponent],
  imports: [CommonModule, AngularMaterialModule]
})
export class CardWrapperModule { }
