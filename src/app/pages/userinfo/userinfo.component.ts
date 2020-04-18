import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.less']
})
export class UserinfoComponent implements OnInit {

  formData :any= {
    username: '',
    tel:'',
    email: '',
    birthday:'',
    address:'',
  }
  constructor(
    private Router: Router ,
    private HttpClient: HttpClient,
    private message: NzMessageService
  ) { }

  ngOnInit() {
   this.formData.username=window.localStorage.getItem('user_name');
   if(this.formData.username==null){
     this.Router.navigate(['/home']);
   }
   console.log(this.formData.username);
   this.formData.tel="111111";
   this.formData.email="add@address.com"
   this.formData.birthday="2020-2-1";
   this.formData.address="shanghai"

   console.log(this.Router.url);
  }

  submitForm(): void {
    this.message.info("提交成功！");
    this.Router.navigate(['/home'])
  }

  onBack(){
    this.Router.navigate(['/home'])
  }

}
