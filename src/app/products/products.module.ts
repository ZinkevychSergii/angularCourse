import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductsListComponent } from './products-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { routes } from './products.router';

@NgModule({
  declarations: [ProductDetailsComponent, ProductsListComponent],
  imports: [
    MatListModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProductDetailsComponent, ProductsListComponent]
})
export class ProductsModule {}
