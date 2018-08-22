import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salesmen',
  templateUrl: './salesmen.component.html',
  styleUrls: ['./salesmen.component.css']
})
export class SalesmenComponent implements OnInit {

  @Input() param: number;
  constructor() { }

  ngOnInit() {
  }

  getSalesMen(): string[] {

     if (this.param === 1) {
      return ['reddy', 'kartik', 'nair', 'khanna'];
     } else {
      return ['mani', 'gautam', 'meena', 'nana'];

     }

  }
}
