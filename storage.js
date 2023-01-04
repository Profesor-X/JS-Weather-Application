class Storage {
  constructor(){
    this.lat; 
    this.lon;
    this.defaultLat = '25.790157043111662';
    this.defaultLon = '-80.13082953949981';
  }

  getLocationData(){
    if(localStorage.getItem('lat') === null) {
      this.lat = this.defaultLat;
    } else {
      this.lat = localStorage.getItem('lat');
    }

    if(localStorage.getItem('lon') === null) {
      this.lon = this.defaultLon;
    } else {
      this.lon = localStorage.getItem('lon');
    }

    return{
      lat: this.lat,
      lon: this.lon
    }
  }

  setLocationData(lat, lon){
    localStorage.setItem('lat', lat);
    localStorage.setItem('lon', lon);
  }
}