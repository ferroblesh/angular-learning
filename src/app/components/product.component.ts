import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: typedef
  addCart() {
    console.log('Añadir al carrito');
    this.productClick.emit(this.product.id);
  }

}
