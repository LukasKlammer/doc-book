import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../shared/doctors.service';

@Component({
  selector: 'db-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.scss']
})
export class DocDetailsComponent implements OnInit {

  doctor;

  constructor(
    private route: ActivatedRoute,
    public doctorsService: DoctorsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idFromLink = (params.get('id') ||''); // Typ des Routen-Parameters ist string oder null. Methoden erwarten String, deshalb leerer String als Fallback-Wert
      let idAsNumber = Number (idFromLink);
      let foundDoctor = this.doctorsService.getDoctorById(idAsNumber);
      console.log(foundDoctor);
      if (foundDoctor) {
        this.doctor = foundDoctor[0];
        console.log(this.doctor);
      }
    });
  }

}
