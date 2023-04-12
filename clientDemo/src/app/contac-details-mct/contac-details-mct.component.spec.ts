import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacDetailsMCTComponent } from './contac-details-mct.component';

describe('ContacDetailsMCTComponent', () => {
  let component: ContacDetailsMCTComponent;
  let fixture: ComponentFixture<ContacDetailsMCTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacDetailsMCTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacDetailsMCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
