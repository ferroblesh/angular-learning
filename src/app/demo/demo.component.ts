import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'platzi-store';
  power = 10;
  items = ['nicolas', 'julian', 'perez'];

  ngOnInit(): void {
  }

   // tslint:disable-next-line: typedef
  addItem() {
    this.items.push('nuevo item');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
