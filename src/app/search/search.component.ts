import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DoctorsService } from '../shared/doctors.service';

@Component({
  selector: 'db-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allSpecialities:string[] = ['Spezialität'];
  controlSpecialitiesInput = new FormControl('');
  filteredOptionsSpecialities: Observable<string[]>;
  allCitys:string[] = [];
  controlCityInput = new FormControl('');
  filteredOptionsCitys: Observable<string[]>;

  constructor(public doctorsService: DoctorsService) {
    this.allSpecialities = this.doctorsService.allSpecialities;
    this.allCitys = this.doctorsService.allCitys;
  }

  ngOnInit(): void {
    this.filteredOptionsSpecialities = this.controlSpecialitiesInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSpecialities(value || '')),
    );
    this.filteredOptionsCitys = this.controlCityInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCitys(value || '')),
    );
  }

  private _filterSpecialities(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allSpecialities.filter(speciality => speciality.toLowerCase().includes(filterValue));
  }

  private _filterCitys(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCitys.filter(city => city.toLowerCase().includes(filterValue));
  }

}
