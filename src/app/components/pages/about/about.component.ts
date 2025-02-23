import { Component } from '@angular/core';
import { HeroAboutComponent } from "../../imports/AboutPage/hero-about/hero-about.component";
import { CommonModule } from '@angular/common';
import { WhoAreWeComponent } from "../../imports/AboutPage/who-are-we/who-are-we.component";
import { ImageBannerComponent } from "../../imports/AboutPage/image-banner/image-banner.component";
import { PartnersComponent } from "../../imports/AboutPage/partners/partners.component";
import { MapsComponent } from "../../imports/AboutPage/maps/maps.component";

@Component({
  selector: 'app-about',
  imports: [CommonModule, HeroAboutComponent, WhoAreWeComponent, ImageBannerComponent, PartnersComponent, MapsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
}
