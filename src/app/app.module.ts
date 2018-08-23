import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { SalesmenComponent } from './salesmen/salesmen.component';
import { SiblingComponent } from './sibling/sibling.component';
import { HightLightDirective } from './hight-light.directive';
import { DetailsComponent } from './details/details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { RestrauntComponent } from './restraunt/restraunt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    MenuComponent,
    OrderComponent,
    ParentComponent,
    ChildComponent,
    ConfirmOrderComponent,
    DistributorsComponent,
    SalesmenComponent,
    SiblingComponent,
    HightLightDirective,
    DetailsComponent,
    OrderHistoryComponent,
    FilterPipe,
    LoginComponent,
    RestrauntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule ,FormsModule
  ],
  providers: [HttpClient],
  entryComponents: [DetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
