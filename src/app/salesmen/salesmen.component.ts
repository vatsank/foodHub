import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salesmen',
  templateUrl: './salesmen.component.html',
  styleUrls: ['./salesmen.component.css']
})
export class SalesmenComponent implements OnInit {

  @Input() param: any;
  constructor() { }

  ngOnInit() {
  }



}
