import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IProduct } from './products.interface';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolveService implements Resolve<IProduct[]> {
  constructor(private productService: ProductsService) {}

  resolve(): Observable<IProduct[]> {
    return this.productService.getList();
  }
}
