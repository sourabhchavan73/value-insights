import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsMlrtBodyComponent } from './ps-mlrt-body.component';

describe('PsMlrtBodyComponent', () => {
  let component: PsMlrtBodyComponent;
  let fixture: ComponentFixture<PsMlrtBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsMlrtBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsMlrtBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
