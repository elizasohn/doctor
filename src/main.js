import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Symptom } from './symptom.js';
import { Listing } from './listing.js';
import { getListings } from './listing.js';

$(document).ready(function(){
  $('.searchForm').submit(function(event){
    event.preventDefault();
    let symptomInput = $('input#symptom').val();

    (async () => {
      let symptom = new Symptom();
      const response = await
      symptom.getSymptom(symptomInput);
      getListings(response);
    })();
  });
});
