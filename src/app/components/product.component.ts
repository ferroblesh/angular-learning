import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() productClick: EventEmitter<any> = new EventEmitter();


  constructor() {
    console.log('1.- constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   console.log('2.- ngOnChanges');
  // }

  ngOnInit(): void {
    console.log('3.- ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4.- ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5.- destroy');
  }

  // tslint:disable-next-line: typedef
  addCart() {
    console.log('Añadir al carrito');
    this.productClick.emit(this.product.id);
  }

}
