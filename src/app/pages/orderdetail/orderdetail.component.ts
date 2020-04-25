import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.less']
})
export class OrderdetailComponent implements OnInit {

  orderList:any;

  orderid=this.activatedRoute.snapshot.params.orderid;
  ordername="";
  ordertel="";
  orderTime:Date;
  orderAddress="";

  constructor(
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private message: NzMessageService,
    private HttpClient: HttpClient,
    public datepipe:DatePipe
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    this.showOrderDetail();
  }

  showOrderDetail(){
    this.HttpClient.post('http://localhost:8080/salesrecord/showList',this.orderid)
    .toPromise()
    .then(data=>{
      this.orderList=data;
      this.ordername=data[0]["addressname"];
      this.orderAddress=data[0]["addressinfo"];
      this.ordertel=data[0]["tel"];
      this.orderTime=data[0]["createtime"];
      console.log(this.orderList);
    })
    .catch(err=>{
      console.log(err)
      window.alert("获取订单详情失败！")
    })
  }

  onBack() {
    this.Router.navigate(['/home/order'])
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  deleteOrder():void{
    console.log("deleted no."+this.orderid)
  }

  editOrder():void{
    console.log(this.orderAddress)
  }

}
