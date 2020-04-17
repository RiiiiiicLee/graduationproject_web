import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NzModalService } from 'ng-zorro-antd';


@Component({
  selector: 'app-driverinfo',
  templateUrl: './driverinfo.component.html',
  styleUrls: ['./driverinfo.component.less']
})
export class DriverinfoComponent implements OnInit {
  constructor(
    private Router: Router ,
    private modal: NzModalService
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

  showALBON():void{
    this.modal.info({
      nzTitle: 'Alexander ALBON',
      nzContent: '<p>Born in London but racing under the flag of Thailand, Alexander Albon’s first word was in fact Italian – and that word was Ferrari.</p>',
    });
  }

  showHAM():void{
    this.modal.info({
      nzTitle: 'Lewis HAMILTON',
      nzContent: '<p>‘Still I Rise’ – these are the words emblazoned across the back of Lewis Hamilton’s helmet and tattooed across his shoulders, and ever since annihilating expectations with one of the greatest rookie performances in F1 history in 2007, that’s literally all he’s done: risen to the top of the all-time pole positions list ahead of his hero Ayrton Senna, surged into second place in the wins column behind only the inimitable Michael Schumacher, and surpassed the legendary Sir Jackie Stewart for the most championship titles by a British driver.</p>',
    });
  }

  showNORRIS():void{
    this.modal.info({
      nzTitle: 'Lando NORRIS',
      nzContent: '<p>Lando Norris may not be named after Star Wars rebel Lando Calrissian - his Mum just liked the moniker - but he has flair and fighting spirit in bountiful supply</p>',
    });
  }

  showRUSSEL():void{
    this.modal.info({
      nzTitle: 'George RUSSEL',
      nzContent: '<p>He’s the driver with the motto: “If in doubt, go flat out”.George Russell lived by it in his 2019 debut F1 campaign, out-qualifying seasoned team mate Robert Kubica at all 21 Grands Prix, and proving Williams right in identifying him as a hard worker and a tenacious talent.That brilliant baseline speed had served Russell well as he totted up titles on his way to Formula 1. The Briton stormed to the 2017 GP3 championship and delivered the 2018 Formula 2 crown under immense pressure. </p>',
    });
  }

}
