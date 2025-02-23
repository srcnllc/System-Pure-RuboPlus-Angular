import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramCardComponent } from "../../program-card/program-card.component";
import { HomeProgramList } from '../../../../../HomeProgramList';

@Component({
  selector: 'app-progrram',
  imports: [CommonModule, ProgramCardComponent],
  templateUrl: './progrram.component.html',
  styleUrl: './progrram.component.scss'
})
export class ProgrramComponent {
  HomeProgramList = HomeProgramList; // Veriyi component'te kullanılabilir hale getir
}
