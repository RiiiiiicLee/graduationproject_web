import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {

  constructor(
    private Router: Router,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
  }

  onBack() {
    this.Router.navigate(['/home/shop'])
  }

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      img: "https://productview1.fanobject.com/0027/6129/00276129_00.jpg?imwidth=600",
      team: 'Mercedes',
      price: 280,
      num: 1,
    },
    {
      key: '2',
      name: 'Jim Green',
      team: 'Mercedes',
      price: 280,
      num: 1,
    },
    {
      key: '3',
      name: 'Joe Black',
      team: 'Mercedes',
      price: 280,
      num: 2,
    }
  ];
}
