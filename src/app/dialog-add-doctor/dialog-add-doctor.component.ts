import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Doctor } from '../modules/doctor.class';
import { DoctorsService } from '../shared/doctors.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'db-dialog-add-doctor',
  templateUrl: './dialog-add-doctor.component.html',
  styleUrls: ['./dialog-add-doctor.component.scss']
})
export class DialogAddDoctorComponent implements OnInit {
  doctor: Doctor = new Doctor();
  allSpecialities: string[] = []; // create own array allSpecialities, because we want to remove speciality from autocomplete when it is already choosen
  specialityCtrl = new FormControl('');
  @ViewChild('specialityInput') specialityInput: ElementRef<HTMLInputElement>;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(public dialogRef: MatDialogRef<DialogAddDoctorComponent>, public doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.allSpecialities = this.doctorsService.allSpecialities;
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) { // Add our fruit
      this.doctor.specialities.push(value);
    }
    event.chipInput!.clear(); // Clear the input value
    this.specialityCtrl.setValue(null);
  }

  public removeAndAddToAutocomplete(array: string[], item: string): void  {
    this.remove(array, item);
    this.addSpecialityToAutocomplete(item);
  }

  private remove(array: string[], item: string): void {
    const index = array.indexOf(item);
    if (index >= 0) {
      array.splice(index, 1);
    }
  }

  private addSpecialityToAutocomplete(item: string) {
    this.allSpecialities.push(item);
  }

  public save() {
    console.log('save button clicked');
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.doctor.specialities.push(event.option.viewValue);
    this.remove(this.allSpecialities, event.option.viewValue)
    this.specialityInput.nativeElement.value = '';
    this.specialityCtrl.setValue(null);
  }

}
