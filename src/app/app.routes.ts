import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'catalog', loadChildren: './components/catalog/catalog.module#CatalogModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: '**', loadChildren: './shared/page-not-found/page-not-found.module#PageNotFoundModule' }
];
export const AppRoutingModule = RouterModule.forRoot(routes);
