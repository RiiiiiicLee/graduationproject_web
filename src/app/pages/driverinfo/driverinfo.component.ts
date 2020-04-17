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

  showBOTTAS():void{
    this.modal.info({
      nzTitle: 'Valtteri BOTTAS',
      nzContent: '<p>Learning his craft on Finnish roads of ice and snow, he was born to be a Grand Prix racer.Bottas explains that if you can drive on the frozen roads of his homeland then you can drive anywhere. Then there’s the Finnish mentality –reserved, diligent and calm the fast lane of F1 doesn’t faze him.</p>',
    });
  }

  showKVYAT():void{
    this.modal.info({
      nzTitle: 'Danill KVYAT',
      nzContent: '<p>He’s the comeback kid with a capital K. Proving even ‘torpedoes’ can make U-turns, Daniil Kvyat made a surprise F1 return for a third spell with Toro Rosso in 2019. His intrinsic speed and ability to adapt to circuit conditions make him a valuable asset - and he’s a proven podium contender. </p>',
    });
  }

  showOCON():void{
    this.modal.info({
      nzTitle: 'Esteban OCON',
      nzContent: '<p>If there’s one word that dominates Esteban Ocon’s career, it’s ‘sacrifice’.Back when he was just a promising karter, Ocon’s parents sold their house, put their jobs on hold, and began a life on the road, living in a caravan and travelling from circuit to circuit to support their son’s burgeoning career.</p>',
    });
  }

  showSAINZ():void{
    this.modal.info({
      nzTitle: 'Carlos SAINZ',
      nzContent: '<p>He’s the matador from Madrid racing royalty. Entering F1’s Bull Ring paired alongside Max Verstappen at Toro Rosso in 2015, Sainz quickly showed his fighting spirit. A tenacious racer, Sainz puts the car on the edge as he hustles his way through the pack. No wonder he’s earned the nickname Chilli.</p>',
    });
  }

  showGasly():void{
    this.modal.info({
      nzTitle: 'Pierre Gasly',
      nzContent: '<p>If there’s one man who knows how big a rollercoaster ride an F1 driver’s career can be, it’s Pierre Gasly!The flying Frenchman was called up to make his 2017 debut in Malaysia in place of Daniil Kvyat and, after proving his mettle, he was named a Toro Rosso driver the following year.  A further 21 races into his fledgling career, Gasly was moved up again – this time to replace Red Bull big gun Daniel Ricciardo.</p>',
    });
  }

  showLATIFI():void{
    this.modal.info({
      nzTitle: 'Nicholas Latifi',
      nzContent: '<p>Thirteen is an advanced age to begin your karting career these days. But that’s how old Toronto native Nicholas Latifi was when he took his first steps in motorsport. Just 11 years later, he became a fully-fledged Formula 1 driver.</p>',
    });
  }

  showPEREZ():void{
    this.modal.info({
      nzTitle: 'Sergio PEREZ',
      nzContent: '<p>He’s the fighter with a gentle touch from the land of the Lucha Libre.Perez’s reputation in F1 has been built on opposite approaches to Grand Prix racing. On the one hand, he is a punchy combatant who wrestles his way through the pack and into the points. Never afraid to add a bit of spice to his on-track encounters, even his team mates don’t always escape the Mexican’s heat.</p>',
    });
  }

  showSTROLL():void{
    this.modal.info({
      nzTitle: 'Lance STROLL',
      nzContent: '<p>There is no such thing as too much too soon for Stroll, a teenage sensation with a wet weather predilection. One of the cool kids on the grid, Stroll was unveiled shortly after his 18th birthday by Williams – before he finished high school and got his road licence. </p>',
    });
  }


  showGIOVINAZZI():void{
    this.modal.info({
      nzTitle: 'Antonio GIOVINAZZI',
      nzContent: '<p>He’s the Italian steed with speed from the stable of the Prancing Horse. Antonio Giovinazzi flies the flag for Italy as the motorsport mad nation champs at the bit for its next F1 star.The pilota from Puglia can punch his way through the pack and pull off a plucky pass. He showcased this natural racing acumen during a blistering 2016 GP2 campaign where he finished a close runner-up to team mate Pierre Gasly.</p>',
    });
  }

  showLECLERC():void{
    this.modal.info({
      nzTitle: 'Chaerles LECLERC',
      nzContent: '<p>Born in the Mediterranean idyll of Monaco, Leclerc arrived in F1 on a tidal wave of expectation. Practically peerless on his way to the GP3 and Formula 2 crowns, he showcased a dazzling array of skills from scorching pole positions, commanding victories – even when his car caught fire twice at Silverstone – to an ability to muscle his way through the pack. Winning back-to-back championships also taught Leclerc how to handle pressure, another useful tool in the big pond of Formula 1 racing. </p>',
    });
  }

  showRAIKKIONEN():void{
    this.modal.info({
      nzTitle: 'Kimi Räikkönen',
      nzContent: '<p>Bwoah!He’s the world-famous racing driver who just wants to be left alone.Raikkonen literally does his talking on track. Out of the car, the Finn is famously taciturn. Although those who know him well say privately he is an amusing bon viveur, as well as a devoted family man.Meanwhile, his legions of loyal fans have to rely on revelations in his radio transmissions. And maybe Raikkonen himself best summed up the enigma of the Iceman when he said on the airwaves: “Leave me alone, I know what I’m doing.”</p>',
    });
  }

  showVERSTAPPEN():void{
    this.modal.info({
      nzTitle: 'Max Verstappen',
      nzContent: '<p>He’s Max by name, and max by nature. Arriving as Formula 1’s youngest ever competitor at just 17 years old, Verstappen pushed his car, his rivals and the sport’s record books to the limit. The baby-faced Dutchman with the heart of a lion took the Toro Rosso – and then the Red Bull – by the horns with his instinctive racing style. </p>',
    });
  }

  showGROSJEAN():void{
    this.modal.info({
      nzTitle: 'Romain Grosjean',
      nzContent: '<p>High-speed haute cuisine is on the menu in the Grosjean household, where head chef Romain is also a racing star. Quick and with a natural feel for braking and balance, Grosjean has the right ingredients to cook up a storm on track. Tussling and hustling at the front of the pack, the French racer claimed a series of impressive podiums for Renault before moving to spearhead the Haas team.</p>',
    });
  }

  showMagnussen():void{
    this.modal.info({
      nzTitle: 'Kevin Magnussen',
      nzContent: '<p>Call him a lone ranger or a maverick, but Magnussen is here for one reason only – to race. He may be a second-generation F1 driver – following his father Jan onto the grid – but Magnussen’s idols are from the ‘golden era’ of Grand Prix racing when the likes of Juan Manuel Fangio and Stirling Moss risked it all for the love of the sport.</p>',
    });
  }

  showRICCIARDO():void{
    this.modal.info({
      nzTitle: 'Daniel Ricciardo',
      nzContent: '<p>The self-styled “Honey Badger” is fuzzy on the outside and feisty on the inside. Drivers beware because behind Ricciardo’s laidback persona and big grin is a razor-sharp racer with a bite. The Australian combines all-out speed with impressive race craft. Never afraid to push to the limits if it means pulling off a pass, Ricciardo is a proven race-winner for Red Bull, capable of consistently finishing at the business end of the championship table.</p>',
    });
  }

  showVETTEL():void{
    this.modal.info({
      nzTitle: 'Sebastian Vettel',
      nzContent: '<p>Born and raised a Bull, but now very much a Prancing Horse, F1s poster boy of early achievement had won more than all but two drivers in history by the time he was just 26, including back-to-back world titles between 2010 and 2013.Vettel’s trademark is pure pace – and of course his one-finger victory salute. In the chase to the chequered flag, he likes to lead from the front and just like his hero, Michael Schumacher, Vettel has settled in as a race-winning leader at Ferrari.</p>',
    });
  }

}
