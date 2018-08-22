import { DetailsComponent } from './../details/details.component';
import { CompAdderService } from './../comp-adder.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   @Input() itemToAdd: string ;
   @Output() result: EventEmitter<string>
                   = new EventEmitter();

                   @ViewChild('placeHolder', {read: ViewContainerRef}) insPos: ViewContainerRef;
  constructor(private service: CompAdderService) { }

  ngOnInit() {
  }

  confirm() {

     this.result.emit(this.itemToAdd + 'Added');

      this.service.setViewRef(this.insPos);
     this.service.addComponent(DetailsComponent);
  }
}
