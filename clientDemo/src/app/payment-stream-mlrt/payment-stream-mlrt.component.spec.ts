import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStreamMlrtComponent } from './payment-stream-mlrt.component';

describe('PaymentStreamMlrtComponent', () => {
  let component: PaymentStreamMlrtComponent;
  let fixture: ComponentFixture<PaymentStreamMlrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStreamMlrtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentStreamMlrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
