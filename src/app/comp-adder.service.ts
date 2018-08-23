import { DetailsComponent } from './details/details.component';
import { Injectable, ComponentFactoryResolver, ViewContainerRef, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompAdderService {

  private viewRef: ViewContainerRef;

  constructor(private factResolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef) {
    this.viewRef = viewRef;
  }

   addComponent(compToAdd: any) {

      const factory = this.factResolver.resolveComponentFactory(compToAdd);

       const compRef = factory.create(this.viewRef.injector);

        (<DetailsComponent>compRef.instance).shippingDetails
                      = ['DTDC', '48484848', '09-sep-2018'];
               this.viewRef.insert(compRef.hostView);

    }
}
