import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent {
  @Input() bgImage: string = '';
  @Input() buttonName: string = '';
  @Input() title: string = '';
  @Input() btn1: string = '';
  @Input() btn2: string = '';
}
