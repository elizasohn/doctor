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
      $(".output").text(`The doctors who can save your life are: ${response.data[0].practices[0].name}` );
    }
  });
});
