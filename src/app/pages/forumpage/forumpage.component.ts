import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-forumpage',
  templateUrl: './forumpage.component.html',
  styleUrls: ['./forumpage.component.less']
})
export class ForumpageComponent implements OnInit {

  inputComment: any;
  submitting = false;

  constructor(
    private Router: Router,
  ) { }

  ngOnInit() {
  }

  onBack(){
    this.Router.navigate(['/home/forum']);
  }

  data = [
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: '2020-5-13',
      likes: 0,
      count: 0,
    },  
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: '2020-5-13',
      likes: 0,
      count: 0,
    }
  ];

  like(likes, count) {
    if (count == 0) {
      this.data[0].likes++;
      this.data[0].count = 1;
    } else {
      this.data[0].likes--;
      this.data[0].count = 0;
    }
  }

  submitComment() {
    this.submitting = true;
    setTimeout(() => {
      console.log(window.localStorage.getItem('user_name'), this.inputComment);
      this.inputComment = '';
      this.submitting = false;
    }, 800);
  }

  reply(author){
    console.log(author);
    this.inputComment='@'+author+' ';
  }

}
