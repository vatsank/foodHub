import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from '../nav-link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() links: NavLink[];

  constructor() { }

  ngOnInit() {
  }

}
