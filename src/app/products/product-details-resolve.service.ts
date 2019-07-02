import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IProduct } from './products.interface';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolveService implements Resolve<IProduct> {
  constructor(private productService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct> {
    return this.productService.getById(+route.params.id);
  }
}
