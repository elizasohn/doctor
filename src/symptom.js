export class Symptom {
  async getSymptom(symptomInput){
    try{
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomInput}&location=45.505%2C-122.675%2C100&user_location=45.505%2C-122.675&skip=0&limit=10&user_key=${process.env.API_KEY}`);

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("Invalid Data: " + error.message);
    }
  }
}
