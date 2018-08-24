import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {
  code: any;
  data: string;
  menu: Map<string, string>;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.menu = new Map();
     this.menu.set('101', 'Idly ,dosa , vada ,poha');
     this.menu.set('102', 'curd Rice, sambar rice');
     this.menu.set('103', 'chapathi ,dhall');

   }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.code = params['code'];
      this.data = this.menu.get(this.code);
      });

  }

}
