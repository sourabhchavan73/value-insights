import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDCalcComponent } from './s-d-calc.component';

describe('SDCalcComponent', () => {
  let component: SDCalcComponent;
  let fixture: ComponentFixture<SDCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
