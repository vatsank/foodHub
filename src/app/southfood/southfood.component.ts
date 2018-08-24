import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-southfood',
  templateUrl: './southfood.component.html',
  styleUrls: ['./southfood.component.css']
})
export class SouthfoodComponent implements OnInit {


   southMenu = [
      {'code': 101, 'type': 'assets/images/breakfast.jpg'},
      {'code': 102, 'type': 'assets/images/lunch.jpg'},
      {'code': 103, 'type': 'assets/images/dinner.jpg'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
