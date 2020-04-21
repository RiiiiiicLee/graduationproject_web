import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private Router: Router,
    private HttpClient: HttpClient
  ) { }

  loginForm = {
    username: '',
    password: ''
  }

  ngOnInit() {
  }

  login() {
    const formData = this.loginForm;
    this.HttpClient.post('http://localhost:8080/login', formData).toPromise().then((data: any) => {
      window.localStorage.setItem('auth_token', data.Token)
      window.localStorage.setItem('user_name', data.User.username)
      console.log(data)
      this.Router.navigate(['/home'])
    }).catch(err => {
      console.log(err)
      window.alert("用户名或密码错误！")
    }
    )
  }

}
