import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {

  constructor(
    private Router: Router ,
    private message: NzMessageService ,
  ) { }

  ngOnInit() {
   if(window.localStorage.getItem('user_name')==null){
     this.Router.navigate(['/home']);
   }
  }

  gotoShoppingCart(){
    this.Router.navigate(['/home/shoppingcart'])
  }

  onBack(){
    this.Router.navigate(['/home'])
  }

  addToShoppingCart(id:string,number:number){
    console.log(id);
    this.message.info(id+"商品"+number+"件，已加入购物车！")
  }


  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      img:"https://productview1.fanobject.com/0027/6129/00276129_00.jpg?imwidth=600",
      team: 'Mercedes',
      price: 280,
      num:1,
    },
    {
      key: '2',
      name: 'Jim Green',
      team: 'Mercedes',
      price: 280,
      num:1,
    },
    {
      key: '3',
      name: 'Joe Black',
      team: 'Mercedes',
      price: 280,
      num:2,
    }
  ];
}
