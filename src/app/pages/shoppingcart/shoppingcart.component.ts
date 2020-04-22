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

  shoppingCartList:any;

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

  showShoppingCartList(){
    this.HttpClient.get('http://localhost:8080/shoppingcar/list/')
      .toPromise().then(data => {
        this.shoppingCartList = data;
        console.log(this.shoppingCartList);
      }).catch(err => {
        console.log(err)
      })
  }

  gotoshop() {
    this.Router.navigate(['/home/shop']);
  }

  gotoOrder(){
    this.Router.navigate(['/home/order']);
  }

  gotoConfirm() {
    this.Router.navigate(['/home/confirm']);
  }

  addToShoppingCart(id: string, number: number) {
    console.log(id);
    this.message.info(id + "商品" + number + "件，已加入购物车！")
  }

}
