import { CatalogAPIService } from './catalog-api.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule , HttpClientModule, FormsModule, ReactiveFormsModule
      ],
      providers: [CatalogAPIService,  HttpClient],
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

      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to foodHub!');
  }));
});
