import { Component, OnInit } from '@angular/core';
import {LatestNews} from "../../../../models/latest-news";
import {PopularMens} from "../../../../models/popular-mens";

@Component({
  selector: 'app-popular-men',
  templateUrl: './popular-men.component.html',
  styleUrls: ['./popular-men.component.scss']
})
export class PopularMenComponent implements OnInit {
  popularMens: PopularMens[] = [
    {
      img: 'assets/image/premier1.jpg',
      description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM',
    },
    {
      img: 'assets/image/premier2.jpg',
      description: 'Lionel Andrés Messi also known as Leo Messi',
    },
    {
      img: 'assets/image/premier3.jpg',
      description: 'Ronaldo de Assis Moreira (born 21 March 1980)',
    },
    {
      img: 'assets/image/premier1.jpg',
      description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM',
    },
    {
      img: 'assets/image/premier2.jpg',
      description: 'Lionel Andrés Messi also known as Leo Messi',
    },
    {
      img: 'assets/image/premier3.jpg',
      description: 'Ronaldo de Assis Moreira (born 21 March 1980)',
    },
    {
      img: 'assets/image/premier1.jpg',
      description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
