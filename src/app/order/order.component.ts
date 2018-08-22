import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  send = false;
   item: string;
   itemList: string[] = [];
  response: any;
  constructor() { }

  ngOnInit() {
  }
  submit() {

     if (this.item.length !== 0) {
    this.itemList.push(this.item);
     }
    this.item = '';
  }

  checkout() {
     console.log('checkout');
     this.send = true;
  }

  onchange(val) {

   this.response = val;
  }
}
