import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  imgArr: Array<any> =['assets/pics/carousel01.jpg','assets/pics/carousel02.jpg']

}
