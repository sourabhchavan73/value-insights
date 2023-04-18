import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsMlrtHeaderComponent } from './ps-mlrt-header.component';

describe('PsMlrtHeaderComponent', () => {
  let component: PsMlrtHeaderComponent;
  let fixture: ComponentFixture<PsMlrtHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsMlrtHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsMlrtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
