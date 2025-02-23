import { Component, Input } from '@angular/core';
import { ProgramInfoCardComponent } from '../../program-info-card/program-info-card.component';
import { BannerComponent } from '../../banner/banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs',
    imports: [CommonModule,ProgramInfoCardComponent,BannerComponent],
  
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  @Input() data: any; }
