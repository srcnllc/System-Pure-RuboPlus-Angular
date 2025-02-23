import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPricesComponent } from './hero-prices.component';

describe('HeroPricesComponent', () => {
  let component: HeroPricesComponent;
  let fixture: ComponentFixture<HeroPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPricesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
