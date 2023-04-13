import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlrtHeaderComponent } from './mlrt-header.component';

describe('MlrtHeaderComponent', () => {
  let component: MlrtHeaderComponent;
  let fixture: ComponentFixture<MlrtHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlrtHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlrtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
