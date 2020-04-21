import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NzFormModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, DatePipe } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverinfoComponent } from './pages/driverinfo/driverinfo.component';
import { RaceinfoComponent } from './pages/raceinfo/raceinfo.component';
import { TeaminfoComponent } from './pages/teaminfo/teaminfo.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { ConfirmpageComponent } from './pages/confirmpage/confirmpage.component';
import { OrderComponent } from './pages/order/order.component';
import { ResultpageComponent } from './pages/resultpage/resultpage.component';
import { OrderdetailComponent } from './pages/orderdetail/orderdetail.component';
import { GlobalHttpInterceptor } from './global.interceptor';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    UserinfoComponent,
    DriverinfoComponent,
    RaceinfoComponent,
    TeaminfoComponent,
    ShopComponent,
    ShoppingcartComponent,
    ConfirmpageComponent,
    OrderComponent,
    ResultpageComponent,
    OrderdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalHttpInterceptor,
    multi: true
  },
  DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
