import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private Router: Router
  ) { }

  ngOnInit() {
  }
  
  login(){
    this.Router.navigate(['/home']);
  }

}
