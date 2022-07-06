import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'db-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.scss']
})
export class DocCardComponent implements OnInit {


  @Input() doctor: object = [];
  weekdays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  weekdaysGerman: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
  
  germanWeekDays = new Map();
  constructor() {
    this.germanWeekDays.set('monday', 'Montag');
  }

  ngOnInit(): void {
    this.germanWeekDays.get('monday');
  }

}
