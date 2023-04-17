import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdqipProviderTabsComponent } from './sdqip-provider-tabs.component';

describe('SdqipProviderTabsComponent', () => {
  let component: SdqipProviderTabsComponent;
  let fixture: ComponentFixture<SdqipProviderTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdqipProviderTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdqipProviderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
