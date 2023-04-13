import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentstreamTabsComponent } from './paymentstream-tabs.component';

describe('PaymentstreamTabsComponent', () => {
  let component: PaymentstreamTabsComponent;
  let fixture: ComponentFixture<PaymentstreamTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentstreamTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentstreamTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
