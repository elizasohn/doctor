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
      $(".output").html(`The doctors who can save your life are: ${response.data[0].practices[0].name}`);
      $(".output2").html(`accepts new patients: ${response.data[0].practices[0].accepts_new_patients}`);
      $(".output3").html(`address:
        ${response.data[0].practices[0].visit_address.street}  ${response.data[0].practices[0].visit_address.street2}<p>

        ${response.data[0].practices[0].visit_address.city},

        ${response.data[0].practices[0].visit_address.state}

        ${response.data[0].practices[0].visit_address.zip}<p>
        phone number: ${response.data[0].practices[0].phones[0].number}<p>
        website: ${response.data[0].practices[0].website}`);
    }
  });
});
