import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Symptom } from './symptom.js';

$(document).ready(function(){
  $('.searchForm').submit(function(event){
    event.preventDefault();
    let symptomInput = $('input#symptom').val();
    console.log(symptomInput);

    (async () => {
      let symptom = new Symptom();
      console.log(symptom);
      const response = await
      symptom.getSymptom(symptomInput);
      getElements(response);
      console.log(response);
    })();

    function getElements(response) {
      let name = `${response.data[0].practices[0].name}`;
      let street = `${response.data[0].practices[0].visit_address.street}`;
      let street2 = `${response.data[0].practices[0].visit_address.street2}`;
      let city = `${response.data[0].practices[0].visit_address.city}`;
      let state = `${response.data[0].practices[0].visit_address.state}`;
      let zip =  `${response.data[0].practices[0].visit_address.zip}`;
      let number = `${response.data[0].practices[0].phones[0].number}`;
      let website = `${response.data[0].practices[0].website}`;
      let patients = `${response.data[0].practices[0].accepts_new_patients}`;

      $(".output").html(`<ul>The doctors who can save your life are:<ul><li>` +
        name + `</li>
      <li>`+ street + `, ` + street2 + `</li>
      <li>` + city + `, ` + state + ` ` + zip + `</li>
      <li>phone number: ` + number + `</li>
      <li>website: ` + website + `</li>
      <li>accepts new patients: ` + patients + `</li>`);
    }
  });
});
