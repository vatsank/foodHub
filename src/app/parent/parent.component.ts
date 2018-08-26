import { CommService } from './../comm.service';
import { DistributorsComponent } from './../distributors/distributors.component';
import { SalesmenComponent } from './../salesmen/salesmen.component';
import { Component, OnInit, ViewChild, AfterContentInit, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {


  name = 'Crocin';
  response: string;

  // @ViewChild(SalesmenComponent) slist: SalesmenComponent;
  @ViewChild(DistributorsComponent) distributors: DistributorsComponent;
  @ViewChildren(SalesmenComponent) slist: QueryList<SalesmenComponent>;
  distList: string[];
  salesMenList: string[];
   resp: string;
  constructor(private service: CommService,private cd: ChangeDetectorRef) { }

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

  ngAfterViewInit(): void {

    this.distList = this.distributors.getDistributors();

    console.log(this.slist.first.param.innerHTML);
    console.log(this.slist.last.param.innerHTML);

    this.cd.detectChanges();

  }
}

// https://jaxenter.com/simplifying-viewchild-contentchild-angular-142894.html

// https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e
