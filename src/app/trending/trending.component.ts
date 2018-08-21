import { CatalogAPIService } from './../catalog-api.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Catalog } from '../catalog';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

   trendingList: Restaurant[];
     icecreamList: Catalog[];

  constructor(private service: CatalogAPIService) {

     const karachibakery = {id: 101, name: 'Karachi Bakery',
     status: 'open' , rating: 4.5,
     image: 'assets/images/bakery.jpg'};

     const paradise = {id: 102,
      name: 'Paradise Briyani',
     status: 'open' , rating: 4.2,
     image: 'assets/images/biryani.jpg'};

     const nandini = {id: 101,
      name: 'Nandhini Hotel',
     status: 'open' , rating: 3.5,
     image: 'assets/images/nandini.jpg'};

     this.trendingList = [karachibakery, paradise, nandini];
   }

  ngOnInit() {

    this.service.findAll().subscribe(data => this.icecreamList = data);
  }

}
