import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private service: CommService) { }

  ngOnInit() {
    sessionStorage.removeItem('userLogged');

    this.service.change('logout');

    this.router.navigate(['/home']);

  }


}
