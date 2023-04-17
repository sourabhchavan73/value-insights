import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdqipProviderPageComponent } from './sdqip-provider-page.component';

describe('SdqipProviderPageComponent', () => {
  let component: SdqipProviderPageComponent;
  let fixture: ComponentFixture<SdqipProviderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdqipProviderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdqipProviderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
