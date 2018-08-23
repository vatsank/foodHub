import { CommService } from './../comm.service';
import { DistributorsComponent } from './../distributors/distributors.component';
import { SalesmenComponent } from './../salesmen/salesmen.component';
import { Component, OnInit, ViewChild, AfterContentInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterContentInit {


  name = 'Crocin';
  response: string;

  @ViewChildren(SalesmenComponent) slist: QueryList<SalesmenComponent>;
  @ViewChild(DistributorsComponent) distributors: DistributorsComponent;

  distList: string[];
  salesMenList: string[];
   resp: string;
  constructor(private service: CommService) { }

  ngOnInit() {

    this.service.change('send Items urgent by courier');

    this.service.currentMessage.subscribe(fromSib => this.resp = fromSib);
  }

  onChange(val) {

     this.response = val;
  }

  showDetails() {

    this.distList = this.distributors.getDistributors();

  }

  ngAfterContentInit(): void {
    this.showDetails();
    console.log(this.slist);

  }
}
