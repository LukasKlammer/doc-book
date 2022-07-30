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

  controlSpecialitiesInput = new FormControl('');
  filteredOptionsSpecialities: Observable<string[]>;
  controlCityInput = new FormControl('');
  filteredOptionsCitys: Observable<string[]>;

  constructor(public doctorsService: DoctorsService) {  }

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
    if (!value) { // searchDoctors, when input cleared
      this.searchDoctors();
    }
    const filterValue = value.toLowerCase();
    return this.doctorsService.allSpecialities.filter(speciality => speciality.toLowerCase().includes(filterValue));
  }

  private _filterCitys(value: string): string[] {
    if (!value) { // searchDoctors, when input cleared
      this.searchDoctors();
    }
    const filterValue = value.toLowerCase();
    return this.doctorsService.allCitys.filter(city => city.toLowerCase().includes(filterValue));
  }

  public clickOnInput(event) {
    const inputId = event.target.attributes.id.nodeValue; // searches in the event the id from the input field that was clicked
    if(inputId == 'mat-input-0') {
      this.controlSpecialitiesInput.setValue(this.controlSpecialitiesInput.value); // simulates a value change in input --> autocomplete opens
    } else if (inputId == 'mat-input-1') {
      this.controlCityInput.setValue(this.controlCityInput.value);
    }
  }

  public searchDoctors() {
    this.doctorsService.getFilteredDoctors(this.controlSpecialitiesInput.value, this.controlCityInput.value);
  }

  public clearInput(input: HTMLInputElement) {
    if (input.ariaLabel == "Ort") {
      this.controlCityInput.setValue('');
    } else {
      this.controlSpecialitiesInput.setValue('');
    }
  }
}
