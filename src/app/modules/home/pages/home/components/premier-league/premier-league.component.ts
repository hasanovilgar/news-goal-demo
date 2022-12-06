import { Component, OnInit } from '@angular/core';
import {PremierLeague} from "../../../../models/premier-league";

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss']
})
export class PremierLeagueComponent implements OnInit {
  premierLeagues: PremierLeague[] = [
    {
      img: 'assets/image/premier1.jpg',
      title:'Cristiano Ronaldo',
      description: 'Ronaldo began his senior career with Sporting CP, before signing with Manchester United in 2003, at age 18, winning the FA Cup in his first season.',
    },
    {
      img: 'assets/image/premier2.jpg',
      title:'Lionel Andrés Messi',
      description: 'Born and raised in central Argentina, Messi relocated to Spain at the age of 13 to join Barcelona, for whom he made his competitive debut aged 17 in October 2004.',
    },
    {
      img: 'assets/image/premier3.jpg',
      title:'Ronaldo de Assis Moreira',
      description: 'Ronaldinho made his career debut for Grêmio, in 1998. At age 20, he moved to Paris Saint-Germain in France before signing for Barcelona in 2003. In his second season with Barcelona,',
    },
    {
      img: 'assets/image/premier4.png',
      title:'Gareth Frank Bale ',
      description: 'Bale began his professional career at Southampton, playing at left-back and earning acclaim as a free kick specialist. Bale moved to Tottenham Hotspur in 2007, for an eventual £7 million fee.',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
