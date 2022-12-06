import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstHeaderComponent } from './components/first-header/first-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SecondHeaderComponent } from './components/second-header/second-header.component';



@NgModule({
  declarations: [
    FirstHeaderComponent,
    NavbarComponent,
    SecondHeaderComponent
  ],
  exports: [
    FirstHeaderComponent,
    NavbarComponent,
    SecondHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
