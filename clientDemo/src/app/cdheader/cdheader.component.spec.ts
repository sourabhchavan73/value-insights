import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDHeaderComponent } from './cdheader.component';

describe('CDHeaderComponent', () => {
  let component: CDHeaderComponent;
  let fixture: ComponentFixture<CDHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
