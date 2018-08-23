import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainTitle = 'Food Hub';
  pageHeadLinks = [
                {link: '/home', text: 'Home'},
                {link: '/hotels', text: 'Hotels'},
                {link: '/placeOrder', text: 'Order Food'}
                {link: '/history', text: 'Order History'},
          {link: '/login', text: 'Login'}, ];

  constructor() { }

  ngOnInit() {
  }

}
