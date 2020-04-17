import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { DriverinfoComponent } from './pages/driverinfo/driverinfo.component';


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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
