import { Component } from '@angular/core';
import { HeroPricesComponent } from "../../imports/PricesPage/hero-prices/hero-prices.component";
import { Data } from '../../../../Data';
import { ProgramsComponent } from '../../imports/PricesPage/programs/programs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price',
  imports: [CommonModule,HeroPricesComponent,ProgramsComponent],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  data=Data;
}
