import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { DoctorsService } from '../shared/doctors.service';

@Component({
  selector: 'db-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit {

  constructor(public doctorsService: DoctorsService) { }

  ngOnInit(): void {
  }

}

