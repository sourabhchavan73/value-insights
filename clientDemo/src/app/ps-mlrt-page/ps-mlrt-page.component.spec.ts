import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsMlrtPageComponent } from './ps-mlrt-page.component';

describe('PsMlrtPageComponent', () => {
  let component: PsMlrtPageComponent;
  let fixture: ComponentFixture<PsMlrtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsMlrtPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsMlrtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
