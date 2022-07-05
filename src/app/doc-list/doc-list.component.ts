import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit {

 doctors = [{
    "id": 1,
    "title": "Dr. med.",
    "first_name": "Anton",
    "last_name": "Kraus",
    "specialities": ["Dermatologie", "Allgemeinmedizin"],
    "img": "img/anton_kraus.jpg",
    "street": "Lilienstr. 3",
    "zipcode": "81669",
    "city": "München",
    "opening_hours": {
        "monday": "08:00 - 16:00",
        "tuesday": "08:00 - 18:00",
        "wednesday": "08:00 - 16:00",
        "thursday": "08:00 - 18:00",
        "friday": "08:00 - 14:00",
        "saturday": "closed",
        "sunday": "closed"
    }
},
{
    "id": 2,
    "title": "Dr. med.",
    "first_name": "Christina",
    "last_name": "Miller",
    "specialities": ["Allgemeinmedizin"],
    "img": "img/christina_miller.jpg",
    "street": "Schwanthalerstr. 99",
    "zipcode": "80336",
    "city": "München",
    "opening_hours": {
        "monday": "08:00 - 16:00",
        "tuesday": "08:00 - 18:00",
        "wednesday": "closed",
        "thursday": "08:00 - 18:00",
        "friday": "08:00 - 14:00",
        "saturday": "closed",
        "sunday": "closed"
    }
},
{
    "id": 3,
    "title": "Dr. med. dent.",
    "first_name": "Eberhard",
    "last_name": "Olenberger",
    "specialities": ["Zahnmedizin"],
    "img": "img/eberhard_olenberger.jpg",
    "street": "Lilienstr. 3",
    "zipcode": "München",
    "city": "München",
    "opening_hours": {
        "monday": "08:00 - 16:00",
        "tuesday": "08:00 - 18:00",
        "wednesday": "closed",
        "thursday": "08:00 - 18:00",
        "friday": "08:00 - 14:00",
        "saturday": "closed",
        "sunday": "closed"
    }
},
{
    "id": 4,
    "title": "",
    "first_name": "Klara",
    "last_name": "Weber",
    "specialities": ["Radiologie"],
    "img": "img/klara_weber.jpg",
    "street": "Sonnenstraße. 13",
    "zipcode": "80303",
    "city": "München",
    "opening_hours": {
        "monday": "08:00 - 16:00",
        "tuesday": "08:00 - 18:00",
        "wednesday": "08:00 - 16:00",
        "thursday": "08:00 - 18:00",
        "friday": "08:00 - 14:00",
        "saturday": "closed",
        "sunday": "closed"
    }
},
{
    "id": 5,
    "title": "Univ-Prof. Dr. med. dent. Dr. hc.",
    "first_name": "Sonja-Anette",
    "last_name": "Huber",
    "specialities": ["Zahnmedizin", "Mund-Kiefer-Gesichtschirurgie"],
    "img": "img/sonja_huber.jpg",
    "street": "Sonnenstraße. 3",
    "zipcode": "80336",
    "city": "München",
    "opening_hours": {
        "monday": "08:00 - 16:00",
        "tuesday": "08:00 - 18:00",
        "wednesday": "08:00 - 16:00",
        "thursday": "08:00 - 18:00",
        "friday": "08:00 - 14:00",
        "saturday": "closed",
        "sunday": "closed"
    }
}
]

allSpecialities = ['Alleskönner', 'Besserwisser', 'Superdoc'];
allCitys = ['Musterhausen', 'München', 'Basel'];

  constructor() { }

  ngOnInit(): void {
  }

}
