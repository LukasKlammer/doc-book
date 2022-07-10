import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeekdaysService {

  weekdays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  weekdaysGerman: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

  // alternativ method
  germanWeekDays = new Map();
  constructor() {
    this.germanWeekDays.set('monday', 'Montag');
  }

  ngOnInit(): void {
    this.germanWeekDays.get('monday');
  }
}
