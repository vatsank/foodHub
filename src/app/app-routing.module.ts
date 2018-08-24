import { SouthfoodComponent } from './southfood/southfood.component';
import { FoodComponent } from './food/food.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrauntComponent } from './restraunt/restraunt.component';
import { TrendingComponent } from './trending/trending.component';
import { UniversalGuardGuard } from './universal-guard.guard';
import { NorthfoodComponent } from './northfood/northfood.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: TrendingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:next', component: LoginComponent},
  {path: 'placeOrder' , component: OrderComponent},
  {path: 'food', component: FoodComponent, children: [
    {path: 'south', component: SouthfoodComponent},
    {path: 'north', component: NorthfoodComponent},
    {path: 'showItem/:code', component: ShowMenuComponent}
  ]},
  {path: 'hotels', component: RestrauntComponent},
  {path: 'history', component: OrderHistoryComponent,
                     canActivate: [UniversalGuardGuard]},
  {path: '**', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
