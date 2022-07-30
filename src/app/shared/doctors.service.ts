import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Doctor } from '../modules/doctor.class';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Doctor[] = [];

  private API_URL = 'https://lukas-klammer.developerakademie.net/doc-book/get_doctors.php';
  isLoading = true;
  // numberOfTrials = 10; // 10 trials, if server error occours
  filteredDoctors = []
  allSpecialities = [];
  allCitys = [];

  constructor(private firestore: AngularFirestore) {
    // this.getDoctors();

    this.firestore
      .collection('doctors')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.doctors = changes;
        this.isLoading = false;
        this.filterDoctorsAndSpecialities();
      })
  }

  // private async getDoctors() {
  //   try {
  //     let response = await fetch(this.API_URL);
  //     this.doctors = await response.json();
  //     this.isLoading = false;
  //     this.filterDoctorsAndSpecialities();
  //   } catch (e) {
  //     await this.retryLoading();
  //   }
  // }

  // private async retryLoading() {
  //   if (this.numberOfTrials >= 0) {
  //     this.getDoctors();
  //     this.numberOfTrials--;
  //   } else {
  //     alert('Server error. Please retry later.');
  //   }
  // }

  private filterDoctorsAndSpecialities() {
    this.getAllSpezialities();
    this.getAllCitys();
    this.getFilteredDoctors('', '');
  }

  /**
   * this method iterates all doctors and all specialities. If a speciality isn't already available in the array allSpecialitys it will be added
   */
  private getAllSpezialities() {
    const allSpecialitiesArrays = this.doctors.map(d => d.specialities);
    const allSpecialitiesFlat = allSpecialitiesArrays.flat();
    const deduplicatedSpecialities = this.removeDuplicates(allSpecialitiesFlat);
    deduplicatedSpecialities.sort();
    this.allSpecialities = deduplicatedSpecialities;
  }

  /**
   * this method removes all double elements of an array
   *
   * @param arr array that could contain double elements
   * @returns array without the duplicates
   */
  removeDuplicates(arr) {
    return arr.filter((elm, index) => arr.indexOf(elm) === index);
  }

  /**
   * this methods iterates all doctors and all citys. If a city isn't already available in the array all it will be added
   */
  private getAllCitys() {
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
   * @param {string} speciality is a string from the search-input-field
   * @param {string} city is a string from the city-input-field
   * @returns {Object[]} an array with all doctors that match to input city and speciality
   */
  public getFilteredDoctors(speciality: string, city: string) {
    let filteredByCity = this.filterByCity(city);
    let filteredByCityandSpeciality = this.filterBySpeciality(filteredByCity, speciality);
    this.filteredDoctors = filteredByCityandSpeciality;
  }

  private filterByCity(city: string) {
    return this.doctors.filter((doctor) => doctor['city'] == city || city == '');
  }

  /**
   * This function filters the already part-filtered array with doctors by speciality and gives back an array with the matches
   *
   * @param {Object[]} filteredByCity array with filtered doctors just by city
   * @param {string} speciality string by which we filter
   * @returns {Object[]} array with doctors that match to input city
   */
  private filterBySpeciality(filteredByCity: any, speciality: string) {
    let filteredByCityandSpeciality = [];
    if (speciality == '') { // if there is no need to filter --> overgive the whole array
      filteredByCityandSpeciality = filteredByCity;
    } else {
      for (let i = 0; i < filteredByCity.length; i++) { // iterate the array oft doctors
        const doctor = filteredByCity[i];
        for (let j = 0; j < doctor['specialities'].length; j++) { // iterate the array specialities of single doctor
          if (doctor['specialities'][j] == speciality) { // if a single doctor has the searched speciality --> push him to the filtered-array
            filteredByCityandSpeciality.push(doctor);
          }
        }
      }
    }
    return filteredByCityandSpeciality;
  }

  // public async getDoctorById(id: number) {
  //   if (this.doctors.length == 0) { // if a user opens a doctor by url+id instead of the list we must load it from server
  //     await this.getDoctors();
  //   }
  //   return this.doctors.filter(doctor => doctor.id == id);
  // }

  public addDoctor(doctor: Doctor, dialogRef: any) {
    this.firestore
      .collection('doctors')
      .add(doctor.toJSON())
      .then((result: any) => {
        dialogRef.close();
      })
  }

}
