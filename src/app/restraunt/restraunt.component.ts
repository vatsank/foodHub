import { RestaurantInfo } from './../restaurant-info';
import { CatalogAPIService } from './../catalog-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restraunt',
  templateUrl: './restraunt.component.html',
  styleUrls: ['./restraunt.component.css']
})
export class RestrauntComponent implements OnInit {

  list: RestaurantInfo[];
  restForm: FormGroup;
  showForm = false;
  editMode =  false;
  pos: number;
  constructor(private builder: FormBuilder,
        private service: CatalogAPIService) { }

  frmContent = {
    'id': ['', Validators.required],
    'name': ['', Validators.required],
    'description': ['', Validators.required],
    'cuisine': ['', Validators.required],
    'photo': ['', Validators.required],
    'priceLevel': ['', Validators.required],
    'owner_email': ['', Validators.required],


  };
  ngOnInit() {
    this.service.findAllRestaurants().subscribe(resp => this.list = resp);
    this.restForm = this.builder.group(this.frmContent);
  }
   submit() {
     console.log(this.restForm.value);

     if (this.editMode) {

       this.service.updateRestaurant(this.restForm.value)
               .subscribe(resp => {
                  this.list[this.pos] = resp;

              });
     } else {
     this.service.addRestaurant(this.restForm.value).
          subscribe(resp => {
             this.list.push(resp); console.log(resp); } ,
                  err => console.log(err));
   }
  }
   changeFormStatus() {

    this.showForm = true;
   }

      edit(val) {
        this.pos = this.list.indexOf(val);

        this.showForm = true;
        this.restForm.setValue(val);
         this.editMode = true;
      }
      remove(item: any) {
        this.service.removeRestaurant(item.id).
        subscribe(resp => {
          const pos = this.list.indexOf(item);
          this.list.splice(pos, 1);
        });
      }
}

