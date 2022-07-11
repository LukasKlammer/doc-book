export interface Doctor {
  "id":number;
  "title":string;
  "first_name":string;
  "last_name":string;
  "specialities":string[];
  "img":string;
  "street":string;
  "zipcode":string;
  "city":string;
  "opening_hours":Opening;
}

export interface Opening {
  "monday":string;
  "tuesday":string;
  "wednesday":string;
  "thursday":string;
  "friday":string;
  "saturday":string;
  "sunday":string;
}
