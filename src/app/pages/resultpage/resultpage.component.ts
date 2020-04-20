import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.less']
})
export class ResultpageComponent implements OnInit {

  constructor(
    private Router: Router,
  ) { }

  gotoShop() {
    this.Router.navigate(['/home/shop']);
  }

  gotoOrder() {
    this.Router.navigate(['/home/order']);
  }

  ngOnInit() {
    if (window.localStorage.getItem('user_name') == null) {
      this.Router.navigate(['/home']);
    }
  }

}
