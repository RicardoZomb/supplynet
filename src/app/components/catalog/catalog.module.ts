import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../utils/angular-material/angular-material.module';
import { CardWrapperModule } from '../../utils/wrappers/card-wrapper/card-wrapper.module';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogService } from './catalog.service';
import { FormWrapperModule } from '../../utils/wrappers/form-wrapper/form-wrapper.module';

@NgModule({
  declarations: [CatalogComponent],
  exports: [CatalogComponent],
  imports: [AngularMaterialModule, CatalogRoutingModule, CommonModule, FormWrapperModule, CardWrapperModule],
  providers: [CatalogService]
})
export class CatalogModule { }
