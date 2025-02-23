import { Component } from '@angular/core';
import { PartnerList } from '../../../../../PartnerList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
partnerList=PartnerList
}
