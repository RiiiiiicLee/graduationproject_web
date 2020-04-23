import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmpage',
  templateUrl: './confirmpage.component.html',
  styleUrls: ['./confirmpage.component.less']
})
export class ConfirmpageComponent implements OnInit {

  visible = false;
  radioValue:number;

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
    private modal: NzModalService,
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

  updateGoodsNum(shoppingcarid:number,goodsnum:number){
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

  deleteAddress(addressid){
    this.HttpClient.post('http://localhost:8080/address/delete', addressid).toPromise().then((data: any) => {
      if (data == 1) {
        location.reload();
      }
    }).catch(err => {
      console.log(err)
      window.alert("删除失败！")
    }
    )
  }

  gotoConfirm(){
    if(this.radioValue==null){
      this.modal.warning({
        nzTitle: '请选择收货地址',
       nzContent: 'please select your address'
      });
    }else{
      this.Router.navigate(['/home/result']);
    }
  }
}
