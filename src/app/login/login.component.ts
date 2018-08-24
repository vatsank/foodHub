import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    userName: '',
    passWord: '',
    role: 'admin'
  };
  next: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe( pathparam => {
       this.next = pathparam['next'];
    });
  }

    submit(value) {


       console.log(this.next);
       sessionStorage.setItem('userLogged', 'true');
       const url = '/' + this.next;
         this.router.navigate(['/' + this.next]);
    }
}
