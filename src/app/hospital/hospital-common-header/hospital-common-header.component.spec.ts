import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCommonHeaderComponent } from './hospital-common-header.component';

describe('HospitalCommonHeaderComponent', () => {
  let component: HospitalCommonHeaderComponent;
  let fixture: ComponentFixture<HospitalCommonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalCommonHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalCommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
