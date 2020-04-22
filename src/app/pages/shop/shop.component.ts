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

  goodsList: any

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

  addToShoppingCart(id: string, number: number) {
    console.log(id+number);
    this.message.info(id + "商品" + number + "件，已加入购物车！")
  }

}
