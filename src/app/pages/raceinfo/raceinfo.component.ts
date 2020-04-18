import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-raceinfo',
  templateUrl: './raceinfo.component.html',
  styleUrls: ['./raceinfo.component.less']
})
export class RaceinfoComponent implements OnInit {

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

  showAustralia():void{
    this.modal.info({
      nzTitle: 'Australian Grand Prix',
      nzContent: '<p>Often found on lists of the world’s best cities, Melbourne is a blast all year round – and it only gets better when Formula 1 rolls into town. There are bars and restaurants aplenty, you’re right by the beach, while the race’s appearance at the start of Australia’s autumn means the temperatures should be peachy.</p>',
    });
  }

  showBahrain():void{
    this.modal.info({
      nzTitle: 'Bahrain Grand Prix',
      nzContent: '<p>Given the nature of the track, race-goers in Bahrain have always got a decent chance of being treated to a duel in the desert or three. Away from the race track, Bahrain, as you might expect, is a great place to catch some rays, with the 33-island archipelago kingdom featuring some jaw-dropping resorts. And if you want to do some racing yourself, the Bahrain International Karting Circuit, located right next to the track, is one of the world’s top karting facilities.</p>',
    });
  }

  showVietnam():void{
    this.modal.info({
      nzTitle: 'Vietnam Grand Prix',
      nzContent: '<p>Vietnam is a fascinating country, blending more traditional south-east Asian culture with the country’s French colonial past. And while Vietnam is not alone on the F1 calendar in offering visitors the chance to tack on some beach holiday action, the country does boast some of the world’s finest stretches of sand, which can be found less than three hours’ drive from the Hanoi track – as can the iconic Ha Long Bay, a location used in films like Tomorrow Never Dies and Kong: Skull Island</p>',
    });
  }

  showChina():void{
    this.modal.info({
      nzTitle: 'Chinese Grand Prix',
      nzContent: '<p>Shanghai has expanded itself into one of the world’s most dynamic and lively cities since the start of the millennium, making it an awesome F1 tourist stop. The sprawling Pudong district is chock full of hip bars and amazing restaurants. Then when it’s time to go racing, just hop on the Shanghai Metro’s Line 11 and get off at the Shanghai Circuit stop 60 minutes later.</p>',
    });
  }

  showNetherlands():void{
    this.modal.info({
      nzTitle: 'Dutch Grand Prix',
      nzContent: '<p>Zandvoort combines a lot of enticing features for an F1 fan. There’s the historic track, which famously featured in John Frankenheimer’s Grand Prix, and was the scene of many great F1 moments over the years (Gilles Villeneuve’s three-wheeled lap, anyone?). There’s the atmosphere, which with Max Verstappen on the grid is set to be electric, and most definitely orange-hued. And then there’s the beachside location, just a 30-minute train ride outside of Amsterdam. What’s not to love?</p>',
    });
  }

  showSpanish():void{
    this.modal.info({
      nzTitle: 'Spanish Grand Prix',
      nzContent: '<p>You don’t need us to tell you that Barcelona is one of the world’s great cities, even if we just sort of did. Food, culture, beaches – it’s all there, making a Spanish Grand Prix holiday a properly attractive proposition.</p>',
    });
  }

  showMonaco():void{
    this.modal.info({
      nzTitle: 'Monaco Grand Prix',
      nzContent: '<p>A holiday on the French Riviera, plus the chance to watch Formula 1 cars pounding past places where Monegasques usually go to buy a pint of milk? It really is as fun as it sounds. On top of that, the chance to walk the track after a day’s hard lapping – or even enjoy your dinner on it at one of the terrasse bars – is not to be missed.</p>',
    });
  }

  showAzerbaijan():void{
    this.modal.info({
      nzTitle: 'Azerbaijan Grand Prix',
      nzContent: '<p>As with all city tracks, spectating at the Azerbaijan Grand Prix means that you’re right in the middle of the action when the cars get put back in their boxes. Baku itself is a buzzing city, while food is a key part of Azerbaijan’s culture, incorporating elements of Turkish and Middle Eastern cuisine – so eat up!</p>',
    });
  }

  showCanadian():void{
    this.modal.info({
      nzTitle: 'Canadian Grand Prix',
      nzContent: '<p>The Montrealais really embrace their Grand Prix weekend, with the charming city turning into an F1-loving party town in the week leading up to the race. For the Grand Prix itself, the leafy setting makes the Circuit Gilles-Villeneuve one of Formula 1’s most laidback venues.</p>',
    });
  }

  showFrench():void{
    this.modal.info({
      nzTitle: 'French Grand Prix',
      nzContent: '<p>Drive just 10km south of the circuit and you’ll find yourself on the French Riviera, one of the most revered coastlines in the world thanks to its beautiful beaches, pretty harbourside towns, great food and, if you fancy it, incredible local wines. Apart from the racing action, that’s why you go!</p>',
    });
  }

  showAustrian():void{
    this.modal.info({
      nzTitle: 'Austrian Grand Prix',
      nzContent: '<p>Race tracks don’t come much more picturesque than the Red Bull Ring, set in an idyllic natural bowl in the Styrian mountains. That makes for a pleasant environment for a Grand Prix, while if you’re after tourist attractions to visit after the race, look no further than the museum in Graz dedicated to the city’s favourite son: Arnold Schwarzenegger.</p>',
    });
  }

  showBritish():void{
    this.modal.info({
      nzTitle: 'British Grand Prix',
      nzContent: '<p>It’s hard to stop the goose bumps from prickling as you walk around one of the great cathedrals of motorsport, while in terms of atmosphere, the British fans are always reliably raucous – this is the country that invented football (that’s soccer, mind), after all.</p>',
    });
  }

  showHungarian():void{
    this.modal.info({
      nzTitle: 'Hungarian Grand Prix',
      nzContent: '<p>Hungary in July is usually hot hot hot. The good news if you’re at the track, though, is that there’s a water park close by – the Mogyorodi Aquarena vizi szorakoztatopark – which should be a good place to cool off. Away from aqueous activities, the circuit is only 20km from Budapest, putting you close to one of Europe’s most fascinating, storied and lively city centres.</p>',
    });
  }

  showBelgian():void{
    this.modal.info({
      nzTitle: 'Belgian Grand Prix',
      nzContent: '<p>What’s not to love about one of Europe’s classic tracks? Only the truly great drivers conquer Spa, with Ayrton Senna and Michael Schumacher among those to master this magical circuit. Add in the wonderful setting of the Ardennes forest and it’s no surprise that it’s a fan favourite, with a record 265,000 spectators turning out to watch the 2017 Spa showdown.</p>',
    });
  }

  showItalian():void{
    this.modal.info({
      nzTitle: 'Italian Grand Prix',
      nzContent: '<p>The parkland setting of Monza, located just to the north east of Italy’s fashion capital Milan, makes for a relaxed, leafy setting for a Grand Prix, while the preserved Monza banking – spot it in the background as the cars exit the Parabolica, as well as on the flyover bridge they pass under en route to the Variante Ascari – leaves you in no doubt that you’re in the presence of a very special race track.</p>',
    });
  }

  showSingapore():void{
    this.modal.info({
      nzTitle: 'Singapore Grand Prix',
      nzContent: '<p>If you want to see Singapore at its best, there’s no better time to do so than when Formula 1 arrives in the heart of this buzzing city. Get the lay of the land by taking a ride on the Singapore Flyer, a giant Ferris wheel overlooking the track’s permanent pits complex, then get stuck into Singapore’s incredible bar and restaurant scene. Cocktail fanatics should also make a pilgrimage to the famous Raffles Hotel – the proper home of the Singapore Sling (non-alcoholic versions are available!)</p>',
    });
  }

  showRussian():void{
    this.modal.info({
      nzTitle: 'Russian Grand Prix',
      nzContent: '<p>Occupying a prime spot on the Black Sea, Sochi is one of Russia’s top beach resorts in the summer, while the race’s early autumn slot should mean it’s just about warm enough for you to work on your tan. If you were inspired by the city’s Winter Olympics, however, you’re out of luck – the ski season in the resorts around Sochi doesn’t get going until December.</p>',
    });
  }

  showJapanese():void{
    this.modal.info({
      nzTitle: 'Japanese Grand Prix',
      nzContent: '<p>A track that has witnessed an unfair share of legendary F1 moments (not least between Messrs Prost and Senna), a unique set of fans with an unabashed commitment to playing Formula 1 dress-up, a Ferris wheel, and great food. Okay, for most of us it’s a long slog to get there, but surely a better question is: ‘Why not go?’</p>',
    });
  }

  showUS():void{
    this.modal.info({
      nzTitle: 'US Grand Prix',
      nzContent: '<p>There’s a reason Austin is often regarded as America’s coolest city, with great food and a vibrant nightlife, all united under the banner of the city’s unofficial slogan: ‘Keep Austin Weird’. Then when racing starts, you’ll be in attendance at one of the great modern race tracks. With the Americans’ attitude to partying, you won’t want to miss out!</p>',
    });
  }

  showMexico():void{
    this.modal.info({
      nzTitle: 'Mexico City Grand Prix',
      nzContent: '<p>Mexico City is one of the world’s most buzzing, vibrant metropolises. And with the Autodromo Hermanos Rodriguez located just to the east of the city, with a metro station ready to whip you into the downtown at the end of each day’s racing action, the Mexican Grand Prix is a fantastic chance to properly mix sport and culture.</p>',
    });
  }

  showBrazilian():void{
    this.modal.info({
      nzTitle: 'Brazilian Grand Prix',
      nzContent: '<p>A carnival atmosphere really does dominate in Brazil, and watching Formula 1 cars alongside the locals is something every F1 fan should experience. True, it doesn’t look like there’ll be a local driver to cheer on any time soon, but that won’t stop the party at Interlagos.</p>',
    });
  }
  showAbuDhabi():void{
    this.modal.info({
      nzTitle: 'Abu Dhabi Grand Prix',
      nzContent: '<p>Yas Island was a blank canvas for developers to turn into a tourist attraction, and 11 years and $40 billion later, they’ve nearly finished doing just that. Seven hotels, Ferrari’s indoor theme park, a mall, a water park, a golf course, a beach, a concert arena and a nightclub, all framed by perfect Emirati weather. What more could you want?</p>',
    });
  }

}
