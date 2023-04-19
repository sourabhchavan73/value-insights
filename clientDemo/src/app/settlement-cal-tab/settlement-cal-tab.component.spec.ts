import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementCalTabComponent } from './settlement-cal-tab.component';

describe('SettlementCalTabComponent', () => {
  let component: SettlementCalTabComponent;
  let fixture: ComponentFixture<SettlementCalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementCalTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettlementCalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
