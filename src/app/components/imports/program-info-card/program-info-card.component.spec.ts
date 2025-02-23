import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramInfoCardComponent } from './program-info-card.component';

describe('ProgramInfoCardComponent', () => {
  let component: ProgramInfoCardComponent;
  let fixture: ComponentFixture<ProgramInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
