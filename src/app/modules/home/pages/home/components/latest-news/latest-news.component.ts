import {Component, OnInit} from '@angular/core';
import {LatestNews} from "../../../../models/latest-news";

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  latestNews: LatestNews[] = [
    {
      time: '23:29',
      description: 'Three Players and a Podcast: Should women\'s football have away sections?',
    },
    {
      time: '22:40',
      description: 'South Korea snatch dramatic late win over Portugal to reach last 16',
    },
    {
      time: '15:33',
      description: 'Celtic finalising Johnston deal | Juranovic, Giakoumakis could leave',
    },
    {
      time: '10:55',
      description: 'Live on Sky: \'EFL Access All Areas\' at Wycombe vs Portsmouth',
    },
    {
      time: '08:45',
      description: 'Williamson set for Arsenal return after two months injured',
    },
    {
      time: '23:20',
      description: 'Livingston vs Hearts and Celtic\'s trip to Dundee Utd live on Sky',
    },
    {
      time: '02:02',
      description: 'Stones hails \'terrific\' Maguire | Picking team is Southgate\'s hardest task',
    },
    {
      time: '22:22',
      description: 'Sky Sports readers\' England XI vs Senegal revealed',
    },
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

}
