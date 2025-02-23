import { Component } from '@angular/core';
import { HeroContactComponent } from '../../imports/contactPage/hero-contact/hero-contact.component';
import { BannerContactComponent } from '../../imports/contactPage/banner-contact/banner-contact.component';
import { FormSectionComponent } from '../../imports/contactPage/form-section/form-section.component';

@Component({
  selector: 'app-contact',
  imports: [HeroContactComponent,BannerContactComponent,FormSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
