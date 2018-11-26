import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../utils/angular-material/angular-material.module';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FormWrapperModule } from '../../utils/wrappers/form-wrapper/form-wrapper.module';

@NgModule({
  declarations: [CatalogComponent],
  exports: [CatalogComponent],
  imports: [AngularMaterialModule, CatalogRoutingModule, CommonModule, FormWrapperModule],
})
export class CatalogModule { }
