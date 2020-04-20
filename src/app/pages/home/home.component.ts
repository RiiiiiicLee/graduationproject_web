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
      active: false,
      name: 'Norris: F1/FIA coronavirus calls create a “level playing field"',
      content: 'McLaren driver Lando Norris reckons the immediate responses to the coronavirus pandemic from Formula 1 and the FIA regarding team operations has created a "level playing field" on car development.',
      imgurl:'https://d2d0b2rxqzh1q5.cloudfront.net/sv/2.183/dir/294/image/2945bf81f004032ac9751f438befec3c.jpg',
      imgname:'Norris: F1/FIA co',
    },
    {
      active: false,
      name: 'Wolff makes Aston Martin investment, committed to Mercedes F1 role',
      content:'Mercedes Formula 1 boss Toto Wolff has made a personal investment in Aston Martin, Autosport has learned, but he remains fully committed to his current role at the title-winning team.',
      imgurl:'https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/7fe/image/7fed6bb6370a62b9c71130ea888b54ed.jpg',
      imgname:'Wolff mak',
    },
    {
      active: false,
      name: 'McLaren changes to fit Mercedes F1 engine switch will be monitored',
      content:'McLaren has agreed a monitoring process with the FIA for its switch to Mercedes Formula 1 engines next year to ensure it does not make changes for extra performance gains.',
      imgurl:'https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/0ef/image/0efbf6c665c0570c55b8c292fae5681a.jpg',
      imgname:'McLaren changes',
    }
  ];

}
