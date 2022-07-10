import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeekdaysService } from '../shared/weekdays.service';

@Component({
  selector: 'db-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.scss']
})
export class OpeningHoursComponent implements OnInit {

  @Input() doctor: object = [];
  public isDetailView:boolean = false;

  constructor(
    private route: ActivatedRoute,
    public weekdaysService: WeekdaysService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idFromLink = (params.get('id') ||''); // Typ des Routen-Parameters ist string oder null. Methoden erwarten String, deshalb leerer String als Fallback-Wert
      if (idFromLink == '') {
        this.isDetailView = false;
      } else {
        this.isDetailView = true;
      }
    });
  }

}
