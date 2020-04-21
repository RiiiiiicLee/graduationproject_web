import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.less']
})
export class OrderdetailComponent implements OnInit {

  orderid = this.activatedRoute.snapshot.params.orderid;

  constructor(
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    console.log(this.orderid);
  }


  onBack() {
    this.Router.navigate(['/home/order'])
  }

  order = 
    {
      orderNo: this.orderid,
      name: '李四',
      tel: '123456789',
      creatTime: '2020-03-29 15:34:10',
      address: '上海市hgfdhgfd',
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
