import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmpage',
  templateUrl: './confirmpage.component.html',
  styleUrls: ['./confirmpage.component.less']
})
export class ConfirmpageComponent implements OnInit {

  visible = false;
  radioValue = '1';

  style = {
    display: 'block',
    height: '50px',
    lineHeight: '10px',
  };

  addressList:any;
  shoppingCartList:any;

  addressData :any= {
    addressinfo:'',
    addressname: '',
    tel: '',
  }

  constructor(
    private Router: Router,
    private message: NzMessageService,
    private HttpClient: HttpClient,
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
    this.showAddressList();
    this.showShoppingCartList();
  }

  showAddressList(){
    this.HttpClient.get('http://localhost:8080/address/list/')
      .toPromise().then(data => {
        this.addressList = data;
        console.log(this.addressList);
      }).catch(err => {
        console.log(err)
      })
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

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  onBack() {
    this.Router.navigate(['/home/shoppingcart']);
  }

  gotoResult() {
    this.Router.navigate(['/home/result']);
  }

  addToShoppingCart(id: string, number: number) {
    console.log(id);
    this.message.info(id + "商品" + number + "件，已加入购物车！")
  }

  addAddress(){
    this.HttpClient.post('http://localhost:8080/address/add',this.addressData)
    .toPromise()
    .then(data=>{
      console.log(data);
      
      window.alert("地址已更新");
      location.reload();
    })
    .catch(err=>{
      console.log(err)
      window.alert("更新失败！")
    })
  }

}
