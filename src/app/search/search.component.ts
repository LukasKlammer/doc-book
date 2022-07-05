import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'db-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() allSpecialities:string[] = [];
  controlSpecialitiesInput = new FormControl('');
  filteredOptionsSpecialities: Observable<string[]>;
  @Input() allCitys:string[] = [];
  controlCityInput = new FormControl('');
  filteredOptionsCitys: Observable<string[]>;

  constructor() { }

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
