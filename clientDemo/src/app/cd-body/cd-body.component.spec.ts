import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdBodyComponent } from './cd-body.component';

describe('CdBodyComponent', () => {
  let component: CdBodyComponent;
  let fixture: ComponentFixture<CdBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
