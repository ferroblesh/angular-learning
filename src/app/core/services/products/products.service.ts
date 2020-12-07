import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api);
  }

  // tslint:disable-next-line: typedef
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  // tslint:disable-next-line: typedef
  createProduct(product: Product) {
    return this.http.post<Product>(`${environment.url_api}`, product);
  }

  // tslint:disable-next-line: typedef
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(`${environment.url_api}/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/${id}`);
  }
}
