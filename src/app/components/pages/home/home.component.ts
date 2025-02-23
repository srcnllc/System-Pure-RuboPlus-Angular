import { Component } from '@angular/core';
import { HeroComponent } from "../../imports/HomePage/hero/hero.component";
import { CareerCenterComponent } from "../../imports/HomePage/career-center/career-center.component";
import { PartnersComponent } from "../../imports/AboutPage/partners/partners.component";
import { ProgrramComponent } from "../../imports/HomePage/progrram/progrram.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CareerCenterComponent, PartnersComponent, ProgrramComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
