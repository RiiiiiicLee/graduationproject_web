import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor(
    private Router: Router
  ) { }

  ngOnInit() {
  }

  gotoLogin(){
    this.Router.navigate(['/login']);
  }

  gotoSignup(){
    this.Router.navigate(['/signup']);
  }

}
