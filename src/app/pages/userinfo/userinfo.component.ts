import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NzMessageService } from 'ng-zorro-antd';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {

  userInfoForm: any = {
    username: '',
    tel: '',
    email: '',
    birthday: '',
    address: '',
  }

  constructor(
    private Router: Router,
    private HttpClient: HttpClient,
    private message: NzMessageService,
    public datepipe:DatePipe
  ) { }

  ngOnInit() {
    const username = window.localStorage.getItem('user_name');
    if (username == null) {
      this.Router.navigate(['/home']);
    }
    this.getUserInfo(username);
  }

  getUserInfo(username){
    this.HttpClient.post('http://localhost:8080/user/showEdit',username)
    .toPromise()
    .then((data:any)=>{
      this.userInfoForm=data;
    })
    .catch(err=>{
      console.log(err)
    })
  }

  submitForm(): void {
    this.userInfoForm.birthday=this.datepipe.transform(this.userInfoForm.birthday,'yyyy-MM-dd');
    this.HttpClient.post('http://localhost:8080/user/edit',this.userInfoForm)
    .toPromise()
    .then(data=>{
      console.log(data);
      this.Router.navigate(['/home'])
      window.alert("用户"+this.userInfoForm.username+"已更新")
    })
    .catch(err=>{
      console.log(err)
      window.alert("更新失败！")
    })
  }

  onBack() {
    this.Router.navigate(['/home'])
  }
}
