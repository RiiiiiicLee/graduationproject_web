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

  panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];

}
