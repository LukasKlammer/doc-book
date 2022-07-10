import { Component, Input } from '@angular/core';
import { WeekdaysService } from '../shared/weekdays.service';

@Component({
  selector: 'db-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.scss']
})
export class DocCardComponent {


  @Input() doctor: object = [];



  constructor() { }


}
