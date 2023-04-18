import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsMlrtParticipationRulesComponent } from './ps-mlrt-participation-rules.component';

describe('PsMlrtParticipationRulesComponent', () => {
  let component: PsMlrtParticipationRulesComponent;
  let fixture: ComponentFixture<PsMlrtParticipationRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsMlrtParticipationRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsMlrtParticipationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
