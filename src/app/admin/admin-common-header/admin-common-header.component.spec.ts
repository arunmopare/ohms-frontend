import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommonHeaderComponent } from './admin-common-header.component';

describe('AdminCommonHeaderComponent', () => {
  let component: AdminCommonHeaderComponent;
  let fixture: ComponentFixture<AdminCommonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommonHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
