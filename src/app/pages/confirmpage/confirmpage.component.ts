import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd';

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

  addressData :any= {
    addressId: '',
    addressInfo:'',
    addressName: '',
    tel: '',
  }

  constructor(
    private Router: Router,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }else{
      location.reload();
    }
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
    console.log(this.addressData);
  }

  addresslist = [
    {
      addressId: '1',
      addressInfo: "上海市上海",
      addressName: '王五',
      tel: '123456789'
    }
  ]

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      img: "https://productview1.fanobject.com/0027/6129/00276129_00.jpg?imwidth=600",
      team: 'Mercedes',
      price: 280,
      num: 1,
    },
    {
      key: '2',
      name: 'Jim Green',
      team: 'Mercedes',
      price: 280,
      num: 1,
    },
    {
      key: '3',
      name: 'Joe Black',
      team: 'Mercedes',
      price: 280,
      num: 2,
    },
    {
      key: '4',
      name: 'Joe Black',
      team: 'Mercedes',
      price: 280,
      num: 2,
    },
    {
      key: '3',
      name: 'Joe Black',
      team: 'Mercedes',
      price: 280,
      num: 2,
    },

  ];

}
