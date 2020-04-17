import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  username: string =window.localStorage.getItem('user_name')

  constructor(
    private Router: Router
  ) { }

  ngOnInit() {
    console.log(this.username);
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

  nologin():boolean{
    if(this.username ==null){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
      window.localStorage.removeItem('auth_token');
      window.localStorage.removeItem('user_name');
      window.alert('已退出登录');
      location.reload();
  }

}
