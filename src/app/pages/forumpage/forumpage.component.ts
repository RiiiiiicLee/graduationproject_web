import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { distanceInWords } from 'date-fns';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';


@Component({
  selector: 'app-forumpage',
  templateUrl: './forumpage.component.html',
  styleUrls: ['./forumpage.component.less']
})
export class ForumpageComponent implements OnInit {

  forumOrderId = this.activatedRoute.snapshot.params.forumOrderId;
  forumDetail: any;
  datetime: any;
  inputComment: any;
  submitting = false;
  user_name = window.localStorage.getItem('user_name');

  constructor(
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private HttpClient: HttpClient,
    private Datepipe: DatePipe,
    private message: NzMessageService,
    private modal:NzModalService,
  ) { }

  ngOnInit() {
    if (this.user_name == null) {
      this.Router.navigate(['/home']);
    }
    this.showForumDetail();
  }

  showForumDetail() {
    this.HttpClient.post('http://localhost:8080/forum/detail', this.forumOrderId).toPromise().then(data => {
      this.forumDetail = data;
      let floor=1;
      this.forumDetail.forEach(forumDetail => {
        this.datetime = this.Datepipe.transform(forumDetail.createtime, 'short');
        forumDetail.createtime = distanceInWords(new Date(), this.datetime);
        forumDetail.count = 0;
        forumDetail.forumfloor=floor;
        floor++;
      });
      console.log(this.forumDetail);
    })
      .catch(err => {
        console.log(err)
        window.alert("获取帖子详情失败！")
      })

  }

  onBack() {
    this.Router.navigate(['/home/forum']);
  }

  like(id, floorid, likes, count) {
    if (count == 0) {
      this.forumDetail[floorid].likes++;
      likes = likes + 1;
      const formdata = {
        forumId: id,
        likes: likes,
      }
      console.log(formdata);
      this.HttpClient.post('http://localhost:8080/forum/like', formdata).toPromise().then(data => {
        console.log(data);
      })
        .catch(err => {
          console.log(err)
          window.alert("失败！")
        })
      this.forumDetail[floorid].count = 1;
    } else {
      this.forumDetail[floorid].likes--;
      likes = likes - 1;
      const formdata = {
        forumId: id,
        likes: likes,
      }
      console.log(formdata);
      this.HttpClient.post('http://localhost:8080/forum/like', formdata).toPromise().then(data => {
        console.log(data);
      })
        .catch(err => {
          console.log(err)
          window.alert("失败！")
        })
      this.forumDetail[floorid].count = 0;
    }
  }

  submitComment() {
    this.submitting = true;
    setTimeout(() => {
      console.log(this.user_name, this.inputComment);
      const commentdata = {
        forumorderid: this.forumOrderId,
        username: this.user_name,
        content: this.inputComment,
      }
      this.HttpClient.post('http://localhost:8080/forum/comment', commentdata).toPromise().then(data => {
        console.log(data);
        this.showForumDetail();
      })
        .catch(err => {
          console.log(err)
          window.alert("失败！")
        })
      this.inputComment = '';
      this.submitting = false;
    }, 800);
  }

  reply(author) {
    console.log(author);
    this.inputComment = '@' + author + ' ';
  }

  report(forumid, islocked) {
    if (islocked == 0) {
      islocked = 1;
      const reportFormData = {
        forumId: forumid,
        isLocked: islocked,
      };
      this.HttpClient.post('http://localhost:8080/forum/report', reportFormData).toPromise().then(data => {
        console.log(data);
        this.message.info("reported!");
        this.showForumDetail();
      })
        .catch(err => {
          console.log(err);
          window.alert("失败！");
        })
    }else{
      this.message.info("already reported!");
    }
  }

  checkIsLocked(islocked){
    if(islocked==2){
      return false;
    }else{
      return true;
    }
  }

  tobeDeleted(username,floorid) {
    if (username == this.user_name && floorid!= 0) {
      return true;
    }
    else {
      return false;
    }
  }

  delete(id){
    this.modal.confirm({
      nzTitle:'<i>Do you want to delete?</i>',
      nzContent:'<b>cannot be undo</b>',
      nzOnOk:()=>{
        const deleteDataForm={
          forumId:id,
          isDeleted:1
        }
        this.HttpClient.post('http://localhost:8080/forum/delete',deleteDataForm).toPromise().then(data=>{
          console.log(data);
          this.message.info("deleted!");
          this.showForumDetail();
        })
        .catch(err=>{
          console.log(err);
          window.alert("失败！");
        })
      }
    })
  }
}
