import { DistributorsComponent } from './../distributors/distributors.component';
import { SalesmenComponent } from './../salesmen/salesmen.component';
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterContentInit {


  name = 'Crocin';
  response: string;

  @ViewChild(SalesmenComponent) salesmen: SalesmenComponent;
  @ViewChild(DistributorsComponent) distributors: DistributorsComponent;

  distList: string[];
  salesMenList: string[];

  constructor() { }

  ngOnInit() {

  }

  onChange(val) {

     this.response = val;
  }

  showDetails() {

    this.distList = this.distributors.getDistributors();
    this.salesMenList = this.salesmen.getSalesMen();
  }

  ngAfterContentInit(): void {
    this.showDetails();
  }
}
