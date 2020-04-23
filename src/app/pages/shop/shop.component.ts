import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {

  goodsList: any;

  constructor(
    private Router: Router,
    private message: NzMessageService,
    private HttpClient: HttpClient
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    this.showGoodsList();
  }

  showGoodsList() {
    this.HttpClient.get('http://localhost:8080/goods/list')
      .toPromise().then(data => {
        this.goodsList = data;
        this.goodsList.forEach(goods => {
          goods.goodsNum = 1;
        });
      }).catch(err => {
        console.log(err)
      })
  }

  gotoShoppingCart() {
    this.Router.navigate(['/home/shoppingcart'])
  }

  gotoOrder() {
    this.Router.navigate(['/home/order'])
  }

  onBack() {
    this.Router.navigate(['/home'])
  }

  addToShoppingCart(goodsId, goodsNum) {
    const formData = {
      goodsid: goodsId,
      goodsnum: goodsNum,
    }
    this.HttpClient.post('http://localhost:8080/shoppingcar/add', formData).toPromise().then((data: any) => {
      if (data == 1) {
        this.message.info("商品已成功添加至购物车");
      }
      if (data == 10) {
        this.message.info("购物车商品数量已增加");
      }
    }).catch(err => {
      console.log(err)
      window.alert("添加失败！")
    }
    )
  }

}
