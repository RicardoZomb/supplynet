import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../../utils/angular-material/angular-material.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [AngularMaterialModule, CommonModule, PageNotFoundRoutingModule],
})
export class PageNotFoundModule { }
