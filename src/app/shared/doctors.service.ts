import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

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

  allSpecialities = [];
  allCitys = [];

  constructor() {
    this.getAllSpezialities();
    this.getAllCitys();
    this.getFilteredDoctors('Zahnmedizin', 'München');
  }


  /**
   * this methods iterates all doctors and all specialities. If a speciality isn't already available in the array allSpecialitys it will be added
   */
  getAllSpezialities() {
    for (let i = 0; i < this.doctors.length; i++) {
      const doctor = this.doctors[i];
      for (let j = 0; j < doctor['specialities'].length; j++) {
        const singleSpeciality = doctor['specialities'][j];
        if (!this.allSpecialities.find((speciality) => speciality == singleSpeciality)) {
          this.allSpecialities.push(singleSpeciality);
        }
      }
    }
    this.allSpecialities.sort();
  }

  /**
   * this methods iterates all doctors and all citys. If a city isn't already available in the array all it will be added
   */
  getAllCitys() {
    for (let i = 0; i < this.doctors.length; i++) {
      const singleCity = this.doctors[i].city;
      if (!this.allCitys.find((city) => city == singleCity)) {
        this.allCitys.push(singleCity);
      }
    }
    this.allCitys.sort();
  }

  /**
   * This function filters the doctors-array by city-name and speciality
   *
   * @param speciality is a string from the search-input-field
   * @param city is a string from the city-input-field
   * @returns an array with all doctors that match to input city and speciality
   */
  getFilteredDoctors(speciality:string, city:string) {
    let filteredByCity = this.doctors.filter((doctor) => doctor['city'] == city);
    let filteredByCityandSpeciality = [];

    for (let i = 0; i < filteredByCity.length; i++) {
      const doctor = filteredByCity[i];
      for (let j = 0; j < doctor['specialities'].length; j++) {
        const singleSpeciality = doctor['specialities'][j];
        if (singleSpeciality == speciality) {
          filteredByCityandSpeciality.push(doctor);
        }
      }
    }
    console.log(filteredByCityandSpeciality);
    return filteredByCityandSpeciality;
  }

  // getAllWeekdays() {
  //   for (let i = 0; i < this.doctors.length; i++) {
  //     const doctor = this.doctors[i];
  //     const days = doctor['opening_hours'];
  //     for (let i in days) {
  //       if (!this.allWeekdays.find((weekday) => weekday == i)) {
  //         this.allWeekdays.push(i);
  //       }
  //     }
  //     console.log(this.allWeekdays);
  //   }
  // }

}
