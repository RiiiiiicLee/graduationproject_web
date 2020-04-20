import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.less']
})
export class TeaminfoComponent implements OnInit {

  constructor(
    private Router: Router ,
    private modal: NzModalService
  ) { }

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  ngOnInit() {
  }

  onBack(){
    this.Router.navigate(['/home'])
  }

  showAlfa():void{
    this.modal.info({
      nzTitle: 'Alfa Romeo Racing ORLEN',
      nzContent: '<p>The name Alfa Romeo boasts Formula 1 connections dating back to the championship’s inception in 1950. Fast forward to the 21st century and Italian flare combines with Swiss sensibilities in a new era for the team formerly known as Sauber.Having enjoyed considerable success in world sportscars, where he helped nurture the emerging talents of future F1 stars Michael Schumacher and Heinz-Harald Frentzen, Peter Sauber guided his eponymous squad into F1 in 1993.</p>',
    });
  }

  showMcLaren():void{
    this.modal.info({
      nzTitle: 'McLaren F1 Team',
      nzContent: '<p>Since entering the sport in 1966 under the guidance and restless endeavour of eponymous founder Bruce, McLarens success has been nothing short of breathtaking. Five glittering decades have yielded countless victories, pole positions and podiums, not to mention eight constructors championships. Whats more, some of the sports greatest drivers made their names with the team, including Emerson Fittipaldi, Ayrton Senna, Mika Hakkinen and Lewis Hamilton.</p>',
    });
  }

  showHaas():void{
    this.modal.info({
      nzTitle: 'Haas F1 Team',
      nzContent: '<p>The youngest team on the grid, Haas made their highly impressive debut in 2016, and in the process became the first all-American-led F1 squad in three decades. Founded by industrialist Gene Haas, they are based in the United States on the same Kannapolis, North Carolina facility as his championship-winning NASCAR Sprint Cup Series team, Stewart-Haas Racing. The Ferrari-powered team, led by the charismatic Guenther Steiner, also have a UK factory in Banbury</p>',
    });
  }

  showAlphaTauri():void{
    this.modal.info({
      nzTitle: 'Scuderia AlphaTauri Honda',
      nzContent: '<p>Established in 2006 as a squad in which young drivers from Red Bull’s prodigious talent pool could cut their F1 teeth, AlphaTauri – originally named Toro Rosso – were formed from the ashes of the plucky Minardi team. Sebastian Vettel gave validity to the approach almost immediately, delivering a fairy-tale win in 2008, before going on to enjoy world championship success with parent team Red Bull Racing. Today the ethos of nurturing talent still holds true, though the Italian squad are no longer simply a ‘B team’ but a constructor in their own right...</p>',
    });
  }

  showFerrari():void{
    this.modal.info({
      nzTitle: 'Scuderia Ferrari Mission Winnow',
      nzContent: '<p>For many, Ferrari and Formula 1 racing have become inseparable. The only team to have competed in every season since the world championship began, the Prancing Horse has grown from the humble dream of founder Enzo Ferrari to become one of the most iconic and recognised brands in the world. Success came quickly through the likes of Alberto Ascari and John Surtees, and continued – in amongst leaner times – with Niki Lauda in the 1970s and then Michael Schumacher in the 2000s, when Ferrari claimed a then unprecedented five consecutive title doubles, securing their status as the most successful and decorated team in F1 history</p>',
    });
  }

  showRacingPoint():void{
    this.modal.info({
      nzTitle: 'BWT Racing Point F1 Team',
      nzContent: '<p>Their first full season under new owners – led by Canadian businessman Lawrence Stroll, father of racer Lance – may have been a tough one, but a bright future beckons for the Silverstone-based squad. Race winners in their original guise of Jordan, and a midfield force as Force India, they are well renowned for their ability to punch above their weight. Add in renewed financial stability, a stable driver line-up, and a new factory in the works, and Racing Point are very much a team to watch in 2020</p>',
    });
  }

  showRedBull():void{
    this.modal.info({
      nzTitle: 'Aston Martin Red Bull Racing',
      nzContent: '<p>Red Bull were no strangers to F1 - as sponsors - prior to formally entering as a works team in 2004. Nonetheless, the scale of their success over the following decade was staggering. After a first podium in 2006, the team hit their stride in 2009, claiming six victories and second in the constructorsstandings. Over the next four seasons they were a tour de force, claiming consecutive title doubles between 2010 and 2013, with Sebastian Vettel emerging as the sports youngest quadruple champion. Now their hopes of recapturing that glory lie with an equally exciting talent – one named Max Verstappen</p>',
    });
  }

  showMercedes():void{
    this.modal.info({
      nzTitle: 'Mercedes-AMG Petronas F1 Team',
      nzContent: '<p>Mercedes modern F1 revival started with the creation of a works squad for 2010 - the platform for a meteoric rise up the Grand Prix order. The team generated huge excitement from the off with the sensational return of Michael Schumacher, but headlines soon followed on track: three podiums in their debut season, all via Nico Rosberg - who then claimed a breakthrough pole/victory double at China in 2012. The following season he was paired with Lewis Hamilton, the duo going on to stage some epic title battles as the Silver Arrows swept all before them to become one of the most dominant forces of the modern F1 era. And with Hamilton now partnered by steely Finn Valtteri Bottas, Mercedes remain very much the team to beat</p>',
    });
  }

  showRenault():void{
    this.modal.info({
      nzTitle: 'Renault DP World F1 Team',
      nzContent: '<p>Renault’s F1 works return – begun in 2016 following the French marque’s takeover of the Lotus team – is proving a real challenge. New management embarked on a long-term restructuring programme aimed at returning the famous name to race-winning glory, but thus far their battle has been one to top the midfield, rather than challenging the big three teams for podiums</p>',
    });
  }

  showWilliams():void{
    this.modal.info({
      nzTitle: 'ROKiT Williams Racing',
      nzContent: '<p>Driven on by the brilliance and passion of Sir Frank Williams, Williams grew from humble beginnings to become a Formula 1 behemoth, unrivalled by all except Ferrari and McLaren in terms of enduring success. Over the past four decades the team has racked up Grand Prix wins and championship glory, and in the process nurtured some of the greatest talents in the sport, both in and out the cockpit</p>',
    });
  }

}
