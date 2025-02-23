import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrramComponent } from './progrram.component';

describe('ProgrramComponent', () => {
  let component: ProgrramComponent;
  let fixture: ComponentFixture<ProgrramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
