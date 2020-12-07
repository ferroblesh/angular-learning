import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.fetchProducts();
  }

  // tslint:disable-next-line: typedef
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  // tslint:disable-next-line: typedef
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

}
