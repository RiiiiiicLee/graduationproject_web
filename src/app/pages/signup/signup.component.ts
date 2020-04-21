import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  signupForm = {
    username: '',
    password: '',
  }

  constructor(
    private Router: Router,
    private HttpClient: HttpClient,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
  }

  signup() {
    const formData = this.signupForm;
    this.HttpClient.post('http://localhost:8080/signup', formData).toPromise().then((data: any) => {
      window.localStorage.setItem('auth_token', data.Token);
      window.localStorage.setItem('user_name', data.User.username);
      console.log(data);
      this.message.info(this.signupForm.username + ",注册成功!请到个人中心完善信息！")
      this.Router.navigate(['/home']);
    }).catch(err => {
      console.log(err)
      window.alert("用户已注册！")
    }
    )
    console.log(this.signupForm.username);
    console.log(this.signupForm.password);
  }
}
