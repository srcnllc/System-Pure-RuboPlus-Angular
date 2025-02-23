import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({

  selector: 'app-education-card',
  imports: [CommonModule],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss'
})
export class EducationCardComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() buttonColor: string = '';
  @Input() titleColor: string = '';
}
