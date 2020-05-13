import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NzModalService } from 'ng-zorro-antd';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  username: string =window.localStorage.getItem('user_name')

  constructor(
    private Router: Router,
    private modal:NzModalService
  ) { }

  ngOnInit() {
  }

  gotoLogin(){
    this.Router.navigate(['/login']);
  }

  gotoSignup(){
    this.Router.navigate(['/signup']);
  }

  gotoUserInfo(){
    this.Router.navigate(['/home/userinfo']);
  }

  gotoDriver(){
    this.Router.navigate(['/home/driverinfo']);
  }

  gotoTeam(){
    this.Router.navigate(['/home/teaminfo']);
  }

  gotoRace(){
    this.Router.navigate(['/home/raceinfo']);
  }

  gotoShop(){
    if(window.localStorage.getItem('user_name')==null){
      this.modal.info({
        nzTitle: 'Please log in',
        nzContent: '<p>请在登录后进入赛车周边购物商城</p>',
      });
    }else{
      this.Router.navigate(['/home/shop']);
    }
  }

  gotoForum(){
    if(window.localStorage.getItem('user_name')==null){
      this.modal.info({
        nzTitle: 'Please log in',
        nzContent: '<p>请在登录后进入赛车周边购物商城</p>',
      });
    }else{
      this.Router.navigate(['/home/forum']);
    }
  }

  nologin():boolean{
    if(this.username ==null){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this.modal.confirm({
      nzTitle: '<i>Do you Want to logout?</i>',
      nzContent: '<b>please confirm</b>',
      nzOnOk: () => this.doLogout()
    });
  }
  
  doLogout(){
    window.localStorage.removeItem('auth_token');
    window.localStorage.removeItem('user_name');
    location.reload();
  }

}
