// INIT STORAGE
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// INIT WEATHEROBJECTS
const weather = new Weather(weatherLocation.lat, weatherLocation.lon);
const geo = new Geocode();
const ui = new UI();
const spinner = document.getElementById('spinner');

// LOAD DATA ON DOM LOAD
document.addEventListener('DOMContentLoaded', getWeatherData)

// CHANGE LOCATION
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
  const zipcode = document.getElementById('zipcode').value;
  
  // CALL WEATHER FUNCTION TO UPDATE WEATHER
  function getGeoData(){

    // GATHER USER ZIPCODE
    geo.getGeocoord(zipcode);

    // DEAL WITH RESPONSE
    geo.getGeocode()
    
    // CHANGE THE DATA AND RENDER NEW WEATHER
    .then(geodata => {
      if(geodata.geocodeResponse.cod === '404' || geodata.geocodeResponse.message === "not found") {
        alert('PLEASE ENTER A VALID ZIP CODE');
        console.log(geodata)
      } else {
        // CALL EATHER METHOD TO CHANGE COORDINATES
        weather.changeWeatherLocation(geodata.geocodeResponse.lat, geodata.geocodeResponse.lon);



        storage.setLocationData(geodata.geocodeResponse.lat, geodata.geocodeResponse.lon);

        // ADD SPINNER CLASS
        this.spinner.classList = 'active';

        // call weather method to repaint UI
        getWeatherData();
      }

      
    })
    .catch(err => console.log(err))
    
  }

  getGeoData();
  $('#locModal').modal('hide');

});


// GET WEATHER DATA
function getWeatherData(){
  weather.getWeather()
  .then(data => {
    // Show Spinner
    ui.load();

    // FILL DASH WITH WEATHER DATA
    ui.paint(data);
    

  })
  .catch(err => console.log(err))
}



