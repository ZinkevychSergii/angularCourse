import { Route } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { ProductsResolveService } from './products-resolve.service';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsResolveService } from './product-details-resolve.service';
import { AdminAuthService } from '../admin-auth.service';

export const routes: Route[] = [
  {
    path: '',
    canActivate: [AdminAuthService],
    component: ProductsListComponent,
    resolve: { products: ProductsResolveService },
    children: [
      {
        path: ':id',
        component: ProductDetailsComponent,
        resolve: { product: ProductDetailsResolveService }
      }
    ]
  }
];
