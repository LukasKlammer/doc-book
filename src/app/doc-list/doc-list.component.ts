import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';
import { DialogAddDoctorComponent } from '../dialog-add-doctor/dialog-add-doctor.component';
import { DoctorsService } from '../shared/doctors.service';

@Component({
  selector: 'db-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit {

  constructor(public doctorsService: DoctorsService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddDoctorComponent);
  }

}

