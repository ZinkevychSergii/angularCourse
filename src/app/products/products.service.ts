import { Injectable } from '@angular/core';
import { productsMock } from './products.mock';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {}

  getList(): Observable<IProduct[]> {
    return of(productsMock);
  }

  getById(id: number): any {
    return this.getList().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
}
