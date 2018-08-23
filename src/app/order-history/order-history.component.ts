import { OrderHistory } from './../order-history';
import { CatalogAPIService } from './../catalog-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  srchCondition = '';
  orderHistory: OrderHistory[];
  p = 1;
  constructor(private service: CatalogAPIService) { }

  ngOnInit() {

    this.service.getOrderHistory().subscribe(
       resp => this.orderHistory = resp);
  }
  show(evnt:any){
   console.log(evnt.target.id);
  }
}
