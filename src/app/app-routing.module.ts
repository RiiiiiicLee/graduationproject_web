import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { DriverinfoComponent } from './pages/driverinfo/driverinfo.component';
import { RaceinfoComponent } from './pages/raceinfo/raceinfo.component';
import { TeaminfoComponent } from './pages/teaminfo/teaminfo.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { ConfirmpageComponent } from './pages/confirmpage/confirmpage.component';
import { OrderComponent } from './pages/order/order.component';
import { ResultpageComponent } from './pages/resultpage/resultpage.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'layout',
    component:LayoutComponent
  },
  {
    path:'home',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'userinfo',
        component: UserinfoComponent
      },
      {
        path:'driverinfo',
        component: DriverinfoComponent
      },
      {
        path:'teaminfo',
        component: TeaminfoComponent
      },
      {
        path:'raceinfo',
        component: RaceinfoComponent
      },
      {
        path:'shop',
        component: ShopComponent
      },
      {
        path:'shoppingcart',
        component:ShoppingcartComponent
      },
      {
        path:'confirm',
        component: ConfirmpageComponent
      },
      {
        path:'order',
        component: OrderComponent
      },
      {
        path:'result',
        component: ResultpageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
