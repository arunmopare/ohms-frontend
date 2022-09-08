import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCommonHeaderComponent } from './patient-common-header.component';

describe('PatientCommonHeaderComponent', () => {
  let component: PatientCommonHeaderComponent;
  let fixture: ComponentFixture<PatientCommonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCommonHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
