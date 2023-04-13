import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentstreamRulesComponent } from './paymentstream-rules.component';

describe('PaymentstreamRulesComponent', () => {
  let component: PaymentstreamRulesComponent;
  let fixture: ComponentFixture<PaymentstreamRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentstreamRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentstreamRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
