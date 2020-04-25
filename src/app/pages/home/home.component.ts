import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  notificationList:any;

  constructor(
    private HttpClient: HttpClient
  ) { }

  ngOnInit() {
    this.showNotiList();
  }

  showNotiList() {
    this.HttpClient.get('http://localhost:8080/notification/list')
      .toPromise().then(data => {
        this.notificationList = data;
        this.notificationList.forEach(notification => {
          notification.active = false;
        });
      }).catch(err => {
        console.log(err)
      })
  }
  
  imgArr: Array<any> =['assets/pics/carousel01.jpg','assets/pics/carousel02.jpg']

}
