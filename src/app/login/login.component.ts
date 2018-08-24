import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { CommService } from '../comm.service';

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
  constructor(private route: ActivatedRoute, private router: Router, private service: CommService) { }

  ngOnInit() {

    this.route.params.subscribe( pathparam => {
       this.next = pathparam['next'];
    });
  }

    submit(value) {

      const url = '/' + this.next;

       if(this.next === undefined){
        this.router.navigate(['/placeOrder']);

       } else {
         this.router.navigate(['/' + this.next]);
       }
       sessionStorage.setItem('userLogged', 'true');
       this.service.change('logged');
    }
}
