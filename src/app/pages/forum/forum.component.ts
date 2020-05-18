import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.less']
})
export class ForumComponent implements OnInit {
  
  forumList:any;

  constructor(
    private Router: Router,
    private HttpClient: HttpClient,
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    this.showForumList();
  }

  showForumList(){
    this.HttpClient.get('http://localhost:8080/forum/list')
      .toPromise().then(data => {
        this.forumList = data;
        console.log(this.forumList);
      }).catch(err => {
        console.log(err)
      })
  }

  onBack(){
    this.Router.navigate(['/home']);
  }

  gotoNewForumPage(){
    this.Router.navigate(['/home/newforum']);
  }
}
