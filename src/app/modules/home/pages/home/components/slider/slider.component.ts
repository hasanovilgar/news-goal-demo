import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {SliderModel} from "../../../../models/slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliders: SliderModel[] = [
    {
    img: 'assets/image/slider1.jpg',
    title:'World Cup hits and misses',
    description:'Lionel Messi magic gives Argentina hope while Louis van Gaal deserves Netherlands trust'
  },
    {
      img: 'assets/image/slider2.jpg',
      title:'Senegal World Cup scouting report',
      description:'Can Lions of Teranga shock England in the desert?'
    },
    {
      img: 'assets/image/slider3.jpg',
      title:'League One and League Two goals and round-up',
      description:'Sheffield Wednesday miss chance to go top'
    },
    {
      img: 'assets/image/slider4.jpg',
      title:'World Cup 2022',
      description:'Gareth Southgate says England are ready for penalty shootout against Senegal in last 16'
    },
    {
      img: 'assets/image/slider5.jpg',
      title:'Women\'s Super League round-up',
      description:'Leah Williamson returns in Arsenal win, Chelsea romp to victory over Leicester'
    },
  ]


  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }



}
