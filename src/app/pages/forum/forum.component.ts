import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.less']
})
export class ForumComponent implements OnInit {
  
  data = [
    {
      forumid :1,
      content : 'Racing car sprays burning fuel into crowd.',
    },
    {
      forumid :2,
      content : 'Japanese princess to wed commoner.',
    }
  ];

  constructor(
    private Router: Router,
  ) { }

  ngOnInit() {
  }

  onBack(){
    this.Router.navigate(['/home']);
  }

}
