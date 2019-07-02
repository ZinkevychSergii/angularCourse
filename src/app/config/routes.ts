import { Route } from '@angular/router';
import { AboutComponent } from '../about/about.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: 'products',
    loadChildren: 'src/app/products/products.module#ProductsModule'
  },
  { path: 'about', loadChildren: 'src/app/about/about.module#AboutModule' },
  { path: '**', redirectTo: 'home' }
];
