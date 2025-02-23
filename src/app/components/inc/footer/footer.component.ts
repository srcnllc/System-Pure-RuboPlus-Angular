import { Component } from '@angular/core';
import { FooterNav } from '../../../../FooterNav';
import { CommonModule } from '@angular/common';
import { BankCardList } from '../../../../BankCardList';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    FooterNav = FooterNav;
    BankCardList=BankCardList;
}
