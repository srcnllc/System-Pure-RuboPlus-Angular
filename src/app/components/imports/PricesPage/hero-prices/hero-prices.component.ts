import { Component } from '@angular/core';
import { EducationList } from '../../../../../EducationList';
import { EducationCardComponent } from '../../education-card/education-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-prices',
  imports: [CommonModule,EducationCardComponent],
  templateUrl: './hero-prices.component.html',
  styleUrl: './hero-prices.component.scss'
})
export class HeroPricesComponent {
  EducationList=EducationList;
}
