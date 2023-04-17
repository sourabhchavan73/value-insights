import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdqipProviderSettlementdetailsComponent } from './sdqip-provider-settlementdetails.component';

describe('SdqipProviderSettlementdetailsComponent', () => {
  let component: SdqipProviderSettlementdetailsComponent;
  let fixture: ComponentFixture<SdqipProviderSettlementdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdqipProviderSettlementdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdqipProviderSettlementdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
