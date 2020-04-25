import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.less']
})
export class OrderdetailComponent implements OnInit {

  sum:number=0;
  orderList: any;

  orderid = this.activatedRoute.snapshot.params.orderid;
  ordername = "";
  ordertel = "";
  orderTime: Date;
  orderAddress = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private modal: NzModalService,
    private HttpClient: HttpClient,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    this.showOrderDetail();
  }

  showOrderDetail() {
    this.HttpClient.post('http://localhost:8080/salesrecord/showList', this.orderid)
      .toPromise()
      .then(data => {
        this.orderList = data;
        this.ordername = data[0]["addressname"];
        this.orderAddress = data[0]["addressinfo"];
        this.ordertel = data[0]["tel"];
        this.orderTime = data[0]["createtime"];
        console.log(this.orderList);
        this.showSum();
      })
      .catch(err => {
        console.log(err)
        window.alert("获取订单详情失败！")
      })
  }

  showSum(){
    this.sum=0;
    if(!this.orderList){
      return;
    }
    this.orderList.forEach((val,index,shoppingcar) => {
      this.sum=this.sum+this.orderList[index]["goodsprice"] * (this.orderList[index]["goodsnum"]-this.orderList[index]["discount"]);
    });
  }

  onBack() {
    this.Router.navigate(['/home/order'])
  }

  deleteOrder(): void {
    this.modal.confirm(
      {
        nzTitle: '<i>Do you Want to delete this order?</i>',
        nzOnOk: () => this.doDeleteOrder()
      }
    );
    
  }

  doDeleteOrder(){
    this.HttpClient.post('http://localhost:8080/salesrecord/userdelete', this.orderid).toPromise().then((data: any) => {
      if (data == 0) {
        window.alert("失败")
      } else {
        this.Router.navigate(['/home/order']);
      }
    }).catch(err => {
      console.log(err)
      window.alert("删除失败！")
    }
    )
  }
}
