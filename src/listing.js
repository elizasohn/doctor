import $ from 'jquery';

export class Listing {
  constructor(name, street, street2, city, state, zip, number, website, patients) {
    this.name = name;
    this.street = street;
    this.street2 = street2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.number = number;
    this.website = website;
    this.patients = patients;
  }
}

export function getListings(response) {
  let listings = [];
  response.data.forEach(function(doctor){
    listings.push(new Listing(
    doctor.practices[0].name,
    doctor.practices[0].visit_address.street,
    doctor.practices[0].visit_address.street2,
    doctor.practices[0].visit_address.city,
    doctor.practices[0].visit_address.state,
    doctor.practices[0].visit_address.zip,
    doctor.practices[0].phones[0].number,
    doctor.practices[0].website,
    doctor.practices[0].accepts_new_patients,
      )
    );

  });
   for (let i = 0; i < 5; i++){
    $(".output1").append(`<ul><ul><li>` +
    listings[i].name + `</li><li>`+ listings[i].street + ` ` + listings[i].street2 + `</li>
    <li>` + listings[i].city + `, ` + listings[i].state + ` ` + listings[i].zip + `</li>
    <li>phone number: ` + listings[i].number + `</li>
    <li>website: ` + listings[i].website + `</li>
    <li>accepts new patients: ` + listings[i].patients + `</li></ul>`);
  }
}
