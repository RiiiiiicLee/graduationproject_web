import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-driverinfo',
  templateUrl: './driverinfo.component.html',
  styleUrls: ['./driverinfo.component.less']
})
export class DriverinfoComponent implements OnInit {

  constructor(
    private Router: Router ,
  ) { }

  ngOnInit() {
  }

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  onBack(){
    this.Router.navigate(['/home'])
  }

}
