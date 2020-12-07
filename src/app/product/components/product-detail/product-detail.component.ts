import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id)
      .subscribe(product => {
        console.log(product);
        this.product = product;
      });
  }

  createProduct(product: Product): void {
    const item: Product = {
      id: '222',
      title: 'title',
      description: 'new item',
      image: 'assets/images/camiseta.png',
      price: 2000
    };
    this.productsService.createProduct(item)
    .subscribe(newProduct => console.log(newProduct));
  }

  // tslint:disable-next-line: typedef
  updateProduct() {
    const item: Partial<Product> = {
      description: 'updated',
      price: 444
    };
    this.productsService.updateProduct('2', item)
    .subscribe(newProduct => console.log(newProduct));
  }

  deleteProduct(): void {
    this.productsService.deleteProduct('222')
      .subscribe(response => console.log(response));
  }
}
