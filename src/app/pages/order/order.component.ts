import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {

  orderList:any;

  orderID:number;

  constructor(
    private Router: Router,
    private HttpClient: HttpClient,
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    this.showOrderList();
  }

  onBack() {
    this.Router.navigate(['/home/shop'])
  }

  showOrderList() {
    this.HttpClient.get('http://localhost:8080/salesrecord/list/')
      .toPromise().then(data => {
        this.orderList = data;
        console.log(this.orderList);
      }).catch(err => {
        console.log(err)
      })
  }

  showOrderID(orderid:number){
    if(this.orderID!=orderid){
      this.orderID=orderid;
    }
    return orderid;
  }
  
}
