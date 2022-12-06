import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LatestNewsComponent } from './pages/home/components/latest-news/latest-news.component';
import {HomeRoutingModule} from "./home-routing.module";
import { PopularMenComponent } from './pages/home/components/popular-men/popular-men.component';
import { CompetitionsComponent } from './pages/home/components/competitions/competitions.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { SliderComponent } from './pages/home/components/slider/slider.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { FeatureComponent } from './pages/home/components/feature/feature.component';
import { PremierLeagueComponent } from './pages/home/components/premier-league/premier-league.component';
import { TransfersComponent } from './pages/home/components/transfers/transfers.component';
import { MatchPreviewsComponent } from './pages/home/components/match-previews/match-previews.component';



@NgModule({
  declarations: [
    HomeComponent,
    LatestNewsComponent,
    PopularMenComponent,
    CompetitionsComponent,
    SliderComponent,
    FeatureComponent,
    PremierLeagueComponent,
    TransfersComponent,
    MatchPreviewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
