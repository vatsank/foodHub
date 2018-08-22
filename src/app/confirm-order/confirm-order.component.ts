import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  @Input() items: string[];
  @Output() result: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {

    console.log(this.items);
    this.result.emit('Order Confirmed will be delivered in 45 minutes');
  }

}
