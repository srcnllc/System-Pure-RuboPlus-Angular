import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // OnInit eklendi
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
 import { Menus } from '../../../../menu';
 import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus = Menus;
  active: string = '';
  menuActive: boolean = false;
  transparent: boolean = false;
  relativePage: boolean = false;

  constructor(private router: Router) {}
  ngOnInit() {
    // URL değişimlerini dinleyelim
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = this.router.url;
        this.transparent = path === '/' || path === '/about';
        this.relativePage = path === '/prices' || path === '/contact';
      }
    });
  }

  setActive(slug: string) {
    this.active = slug;
  }

  setMenuActive(active: boolean) {
    this.menuActive = active;
  }
}