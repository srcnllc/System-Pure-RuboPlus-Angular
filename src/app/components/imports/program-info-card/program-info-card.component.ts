import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-info-card',
  imports: [CommonModule],
  templateUrl: './program-info-card.component.html',
  styleUrls: ['./program-info-card.component.scss']
})
export class ProgramInfoCardComponent {
  @Input() title: string="";
  @Input() subTitle: string="";
  @Input() date: string="";
  @Input() message1: string="";
  @Input() message2: string="";
  @Input() message3: string="";
  @Input() message4: string="";
  @Input() price: string ="";
  @Input() installment: string ="";
  @Input() amount: string ="";
  @Input() description: string ="";
  @Input() color: string ="";
  @Input() messageIcon1: string ="";
  @Input() messageIcon2: string ="";
  @Input() messageIcon3: string ="";
  @Input() messageIcon4: string ="";
  
}
