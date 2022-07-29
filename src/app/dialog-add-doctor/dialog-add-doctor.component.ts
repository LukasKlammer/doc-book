import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Doctor } from '../modules/doctor.class';

@Component({
  selector: 'db-dialog-add-doctor',
  templateUrl: './dialog-add-doctor.component.html',
  styleUrls: ['./dialog-add-doctor.component.scss']
})
export class DialogAddDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();

  constructor(public dialogRef: MatDialogRef<DialogAddDoctorComponent>) { }

  ngOnInit(): void {
    console.log(this.doctor);

  }

  save() {
    console.log('save button clicked');

  }

}
