import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { AngularMaterialModule } from '../utils/angular-material/angular-material.module';
import { SidebarModule } from '../shared/sidebar/sidebar.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [ AngularMaterialModule, SidebarModule]
})
export class HomeModule { }
