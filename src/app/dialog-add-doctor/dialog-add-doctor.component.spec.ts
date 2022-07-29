import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDoctorComponent } from './dialog-add-doctor.component';

describe('DialogAddDoctorComponent', () => {
  let component: DialogAddDoctorComponent;
  let fixture: ComponentFixture<DialogAddDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
