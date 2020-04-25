import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.less']
})
export class ShoppingcartComponent implements OnInit {

  shoppingCartList: any;

  sum:number=0;

  constructor(
    private Router: Router,
    private message: NzMessageService,
    private HttpClient: HttpClient,
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    this.showShoppingCartList();
  }

  showShoppingCartList() {
    this.HttpClient.get('http://localhost:8080/shoppingcar/list/')
      .toPromise().then((data) => {
        this.shoppingCartList = data;
        console.log(this.shoppingCartList);
        this.showSum();
      }).catch(err => {
        console.log(err)
      })
  }

  updateGoodsNum(shoppingcarid: number, goodsnum: number) {
    const formData = {
      shoppingcarid: shoppingcarid,
      goodsnum: goodsnum,
    }
    this.HttpClient.post('http://localhost:8080/shoppingcar/edit', formData).toPromise().then((data: any) => {
      if (data == 1) {
        console.log("商品数量已改变");
      }
    }).catch(err => {
      console.log(err)
      window.alert("商品数量更改失败！")
    }
    )
    this.showSum();
  }

  showSum(){
    this.sum=0;
    if(!this.shoppingCartList){
      return;
    }
    this.shoppingCartList.forEach((val,index,shoppingcar) => {
      this.sum=this.sum+this.shoppingCartList[index]["goodsprice"] * (this.shoppingCartList[index]["goodsnum"]-this.shoppingCartList[index]["discount"]);
    });
  }

  gotoshop() {
    this.Router.navigate(['/home/shop']);
  }

  gotoOrder() {
    this.Router.navigate(['/home/order']);
  }

  gotoConfirm() {
    if (this.shoppingCartList == "") {
      this.message.warning("请添加商品");
    } else {
      this.Router.navigate(['/home/confirm']);
    }
  }

  deleteShoppingCart(shoppingcarid: string) {
    this.HttpClient.post('http://localhost:8080/shoppingcar/delete', shoppingcarid).toPromise().then((data: any) => {
      if (data == 1) {
        this.message.info("删除成功");
        location.reload();
      }
      if (data == 10) {
        this.message.info("此商品已被删除");
        location.reload();
      }
    }).catch(err => {
      console.log(err)
      window.alert("删除失败！")
    }
    )
  }
}
