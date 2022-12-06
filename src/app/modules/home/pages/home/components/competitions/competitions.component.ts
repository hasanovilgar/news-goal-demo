import { Component, OnInit } from '@angular/core';
import {PopularMens} from "../../../../models/popular-mens";
import {CompetitionsModel} from "../../../../models/competitions";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  competitions: CompetitionsModel[] = [
    {
      flag: 'assets/image/flag.jpg',
      country: 'AZE',
      time: '15:00',
      country2: 'TRY',
      flag2: 'assets/image/flag2.png'
    },
    {
      flag: 'assets/image/flag.jpg',
      country: 'AZE',
      time: '13:00',
      country2: 'TRY',
      flag2: 'assets/image/flag2.png'
    },
    {
      flag: 'assets/image/flag.jpg',
      country: 'AZE',
      time: '11:00',
      country2: 'TRY',
      flag2: 'assets/image/flag2.png'
    },
    {
      flag: 'assets/image/flag.jpg',
      country: 'AZE',
      time: '10:00',
      country2: 'TRY',
      flag2: 'assets/image/flag2.png'
    },
    {
      flag: 'assets/image/flag.jpg',
      country: 'AZE',
      time: '15:00',
      country2: 'TRY',
      flag2: 'assets/image/flag2.png'
    },
    {
      flag: 'assets/image/flag.jpg',
      country: 'AZE',
      time: '16:00',
      country2: 'TRY',
      flag2: 'assets/image/flag2.png'
    },
    {
      flag: 'assets/image/flag.jpg',
      country: 'AZE',
      time: '17:00',
      country2: 'TRY',
      flag2: 'assets/image/flag2.png'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
