import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from '../nav-link';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() links: NavLink[];
  showLogin = true;
  showLogout = false;
  constructor(private service: CommService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(info => {
      if (info === 'logged'){
        this.showLogout = true;
        this.showLogin = false;
      }

      if(info === 'logout') {

        this.showLogout = false;
        this.showLogin = true;

      }
    });

  }

}
