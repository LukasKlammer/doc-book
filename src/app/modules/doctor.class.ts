export class Doctor {
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  specialities: string[];
  img: string;
  street: string;
  zipcode: number;
  city: string;
  opening_hours: Opening = {
    "monday": "08:00 - 10:00",
    "tuesday": "08:00 - 10:00",
    "wednesday": "closed",
    "thursday": "08:00 - 10:00",
    "friday": "08:00 - 10:00",
    "saturday": "closed",
    "sunday": "closed"
  };

  constructor(obj?: any) {
    this.id = obj ? obj.id : 0;
    this.title = obj ? obj.title : '';
    this.first_name = obj ? obj.first_name : '';
    this.last_name = obj ? obj.last_name : '';
    this.specialities = obj ? obj.specialities : '';
    this.img = obj ? obj.img : '';
    this.street = obj ? obj.street : '';
    this.zipcode = obj ? obj.zipcode : '';
    this.city = obj ? obj.city : '';
    this.opening_hours = obj ? new Opening(obj.opening_hours) : new Opening();
  }

  public toJSON() {
    return {
      id: this.id,
      title: this.title,
      first_name: this.first_name,
      last_name: this.last_name,
      specialities: this.specialities,
      img: this.img,
      street: this.street,
      zipcode: this.zipcode,
      city: this.city,
      opening_hours: this.opening_hours,
    }
  }
}

class Opening {
  "monday": string;
  "tuesday": string;
  "wednesday": string;
  "thursday": string;
  "friday": string;
  "saturday": string;
  "sunday": string;

  constructor(obj?: any) {
    this.monday = obj ? obj.monday : '08:00 - 16:00';
    this.tuesday = obj ? obj.tuesday : '08:00 - 18:00';
    this.wednesday = obj ? obj.wednesday : 'closed';
    this.thursday = obj ? obj.thursday : '08:00 - 18:00';
    this.friday = obj ? obj.friday : '08:00 - 14:00';
    this.saturday = obj ? obj.saturday : 'closed';
    this.sunday = obj ? obj.sunday : 'closed';
  }
}
