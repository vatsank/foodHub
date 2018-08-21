import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  social = [
    {name: 'FaceBook', class: 'fa fa-facebook-square',
      link:'https://www.facebook.com/KarachiBakery/'} ,
    {name: 'Instagram', class: 'fa fa-instagram'},
    {name: 'Twitter', class: 'fa fa-twitter'}];

  partners = ['Swiggy',  'Zomoto'];
  constructor() { }

  ngOnInit() {
  }

}
