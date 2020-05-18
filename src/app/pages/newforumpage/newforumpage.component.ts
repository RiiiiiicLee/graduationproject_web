import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { distanceInWords } from 'date-fns';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-newforumpage',
  templateUrl: './newforumpage.component.html',
  styleUrls: ['./newforumpage.component.less']
})
export class NewforumpageComponent implements OnInit {

  username=window.localStorage.getItem('user_name');
  inputComment: any;
  submitting = false;

  constructor(
    private Router:Router,
    private HttpClient:HttpClient,
  ) { }

  ngOnInit() {
    if (this.username == null) {
      this.Router.navigate(['/home']);
    }
  }

  onBack(){
    this.Router.navigate(['/home/forum']);
  }

  submitComment() {
    this.submitting = true;
    setTimeout(() => {
      console.log(window.localStorage.getItem('user_name'), this.inputComment);
      const newForumData = {
        username: window.localStorage.getItem('user_name'),
        content: this.inputComment,
      }
      this.HttpClient.post('http://localhost:8080/forum/new', newForumData).toPromise().then(data => {
        console.log(data);
        this.Router.navigate(['/home/forum']);
      })
        .catch(err => {
          console.log(err)
          window.alert("失败！")
        })
      this.inputComment = '';
      this.submitting = false;
    }, 800);
  }
}
