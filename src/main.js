import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Symptom } from './symptom.js';
import { Listing } from './listing.js';

$(document).ready(function(){
  $('.searchForm').submit(function(event){
    event.preventDefault();
    let symptomInput = $('input#symptom').val();


    (async () => {
      let symptom = new Symptom();
      const response = await
      symptom.getSymptom(symptomInput);
      getElements(response);
    })();

    function getElements(response) {
      // let listings = new Array(2);
      // for (let i=0; i<2; i++){
      //   listings[i] = {'name':`${response.data[i].practices[0].name}` }
      // }
      let listing1 = new Listing(
        `${response.data[0].practices[0].name}`,
        `${response.data[0].practices[0].visit_address.street}`,
        `, ${response.data[0].practices[0].visit_address.street2}`,
        `${response.data[0].practices[0].visit_address.city}`,
        `${response.data[0].practices[0].visit_address.state}`,
        `${response.data[0].practices[0].visit_address.zip}`,
        `${response.data[0].practices[0].phones[0].number}`,
        `${response.data[0].practices[0].website}`,
        `${response.data[0].practices[0].accepts_new_patients}`,
      );


      $(".output1").html(`<ul>The doctors who can save your life are:<ul><li>` +
        listing1.name + `</li>
      <li>`+ listing1.street + listing1.street2 + `</li>
      <li>` + listing1.city + `, ` + listing1.state + ` ` + listing1.zip + `</li>
      <li>phone number: ` + listing1.number + `</li>
      <li>website: ` + listing1.website + `</li>
      <li>accepts new patients: ` + listing1.patients + `</li>`);

      let listing2 = new Listing(
        `${response.data[1].practices[0].name}`,
        `${response.data[1].practices[0].visit_address.street}`,
        `, ${response.data[1].practices[0].visit_address.street2}`,
        `${response.data[1].practices[0].visit_address.city}`,
        `${response.data[1].practices[0].visit_address.state}`,
        `${response.data[1].practices[0].visit_address.zip}`,
        `${response.data[1].practices[0].phones[0].number}`,
        `${response.data[1].practices[0].website}`,
        `${response.data[1].practices[0].accepts_new_patients}`,
      );


      $(".output2").html(`<ul>The doctors who can save your life are:<ul><li>` +
        listing2.name + `</li>
      <li>`+ listing2.street + listing2.street2 + `</li>
      <li>` + listing2.city + `, ` + listing2.state + ` ` + listing2.zip + `</li>
      <li>phone number: ` + listing2.number + `</li>
      <li>website: ` + listing2.website + `</li>
      <li>accepts new patients: ` + listing2.patients + `</li>`);

      let listing3 = new Listing(
        `${response.data[2].practices[0].name}`,
        `${response.data[2].practices[0].visit_address.street}`,
        `, ${response.data[2].practices[0].visit_address.street2}`,
        `${response.data[2].practices[0].visit_address.city}`,
        `${response.data[2].practices[0].visit_address.state}`,
        `${response.data[2].practices[0].visit_address.zip}`,
        `${response.data[2].practices[0].phones[0].number}`,
        `${response.data[2].practices[0].website}`,
        `${response.data[2].practices[0].accepts_new_patients}`,
      );


      $(".output3").html(`<ul>The doctors who can save your life are:<ul><li>` +
        listing3.name + `</li>
      <li>`+ listing3.street + listing3.street2 + `</li>
      <li>` + listing3.city + `, ` + listing3.state + ` ` + listing3.zip + `</li>
      <li>phone number: ` + listing3.number + `</li>
      <li>website: ` + listing3.website + `</li>
      <li>accepts new patients: ` + listing3.patients + `</li>`);

      let listing4 = new Listing(
        `${response.data[3].practices[0].name}`,
        `${response.data[3].practices[0].visit_address.street}`,
        `, ${response.data[3].practices[0].visit_address.street2}`,
        `${response.data[3].practices[0].visit_address.city}`,
        `${response.data[3].practices[0].visit_address.state}`,
        `${response.data[3].practices[0].visit_address.zip}`,
        `${response.data[3].practices[0].phones[0].number}`,
        `${response.data[3].practices[0].website}`,
        `${response.data[3].practices[0].accepts_new_patients}`,
      );


      $(".output4").html(`<ul>The doctors who can save your life are:<ul><li>` +
        listing4.name + `</li>
      <li>`+ listing4.street + listing4.street2 + `</li>
      <li>` + listing4.city + `, ` + listing4.state + ` ` + listing4.zip + `</li>
      <li>phone number: ` + listing4.number + `</li>
      <li>website: ` + listing4.website + `</li>
      <li>accepts new patients: ` + listing4.patients + `</li>`);

      let listing5 = new Listing(
        `${response.data[4].practices[0].name}`,
        `${response.data[4].practices[0].visit_address.street}`,
        `, ${response.data[4].practices[0].visit_address.street2}`,
        `${response.data[4].practices[0].visit_address.city}`,
        `${response.data[4].practices[0].visit_address.state}`,
        `${response.data[4].practices[0].visit_address.zip}`,
        `${response.data[4].practices[0].phones[0].number}`,
        `${response.data[4].practices[0].website}`,
        `${response.data[4].practices[0].accepts_new_patients}`,
      );


      $(".output5").html(`<ul>The doctors who can save your life are:<ul><li>` +
        listing5.name + `</li>
      <li>`+ listing5.street + listing5.street2 + `</li>
      <li>` + listing5.city + `, ` + listing5.state + ` ` + listing5.zip + `</li>
      <li>phone number: ` + listing5.number + `</li>
      <li>website: ` + listing5.website + `</li>
      <li>accepts new patients: ` + listing5.patients + `</li>`);
    }
  });
});




// listings.length = `${response.data}`.length;
// console.log(`${response.data}`.length);
// let listing = new Listing;
// listing.name = `${response.data[1].practices[0].name}`;
// console.log(listing.name);
// let listing2 = new Listing;
// listing2.name = `${response.data[0].practices[1].name}`;

//
// let name = `${response.data[0].practices[0].name}`;
// let street = `${response.data[0].practices[0].visit_address.street}`;
// let street2 = `, ${response.data[0].practices[0].visit_address.street2}`;
// if (street2 = "undefined"){
  //   street2 = "";
  // }
  // let city = `${response.data[0].practices[0].visit_address.city}`;
  // let state = `${response.data[0].practices[0].visit_address.state}`;
  // let zip =  `${response.data[0].practices[0].visit_address.zip}`;
  // let number = `${response.data[0].practices[0].phones[0].number}`;
  // let website = `${response.data[0].practices[0].website}`;
  // if (website = "undefined"){
    //   website = "none given";
    // }
    // let patients = `${response.data[0].practices[0].accepts_new_patients}`;
