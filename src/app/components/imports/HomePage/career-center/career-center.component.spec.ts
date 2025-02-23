import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCenterComponent } from './career-center.component';

describe('CareerCenterComponent', () => {
  let component: CareerCenterComponent;
  let fixture: ComponentFixture<CareerCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
