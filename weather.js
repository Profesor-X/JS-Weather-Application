// WEATHER CLASS
class Weather {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  // FETCH DATA
  async getWeather() {
    const apiKey = 'e147c5da2194960048b10ffbbf025f7c';

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${this.lat}&lon=${this.lon}&appid=${apiKey}`);

    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&units=imperial&&exclude=hourly,minutely,hourly,alerts,current&appid=${apiKey}`);

    const responseData = await response.json();

    const forecastData = await forecastResponse.json();

    return {
      responseData,
      forecastData
  
    }
  }

  changeWeatherLocation(lat, lon){
    this.lat = lat;
    this.lon = lon;
  }
}

// GEOCODE CLASS
class Geocode {
  constructor(zip, lat, lon) {
    this.zip = zip;
    this.lat = lat;
    this.lon = lon;
  }

  // FETCH DATA
  async getGeocode() {
    const apiKey = 'e147c5da2194960048b10ffbbf025f7c';

    const geocode = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${this.zip}&appid=${apiKey}`);

    const geocodeResponse = await geocode.json();

    return {
      geocodeResponse
  
    }
  }

  getGeocoord(zip){
    this.zip = zip;
  }


}