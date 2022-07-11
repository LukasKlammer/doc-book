import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../shared/doctors.service';

@Component({
  selector: 'db-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.scss']
})
export class DocDetailsComponent implements OnInit {

  doctor;
  mapsUrl:string = "";
  safeSrc: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    public doctorsService: DoctorsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idFromLink = (params.get('id') ||''); // Typ des Routen-Parameters ist string oder null. Methoden erwarten String, deshalb leerer String als Fallback-Wert
      let idAsNumber = Number (idFromLink);
      let foundDoctor = this.doctorsService.getDoctorById(idAsNumber);
      if (foundDoctor) {
        this.doctor = foundDoctor[0];
      }
    });
    this.doctor['street'] = this.doctor['street'].replace(/\s+/g, '');
    this.mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBzvvAQ8SDchPy_DBPBKyVtnxHSN1QpvIw&q=${this.doctor['street']}+${this.doctor['zipcode']}+${this.doctor['city']}+Germany`;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.mapsUrl);
  }

}
