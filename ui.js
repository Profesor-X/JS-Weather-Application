class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.pressure = document.getElementById("w-pressure");
    this.wind = document.getElementById("w-wind");
    this.spinner = document.getElementById("spinner");
    this.swiper = document.getElementsByClassName("swiper-slide");
  }

  paint(weatherApi) {
    this.location.textContent = weatherApi.responseData.name;
    this.desc.textContent = weatherApi.responseData.weather[0].description;
    this.string.textContent = `${weatherApi.responseData.main.temp} °F`;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weatherApi.responseData.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weatherApi.responseData.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weatherApi.responseData.main.feels_like} °F`;
    this.pressure.textContent = `Pressure: ${weatherApi.responseData.main.pressure}`;
    this.wind.textContent = `Wind: ${weatherApi.responseData.wind.speed} MPH`;

    // 7DAY FORECAST
    const today = new Date();
    const tomorrow = new Date(today);

    this.swiper[0].innerHTML = `
    <img src="https://openweathermap.org/img/wn/${
      weatherApi.forecastData.daily[1].weather[0].icon
    }@2x.png"> 
    <strong>${tomorrow.toDateString(
      tomorrow.setDate(tomorrow.getDate() + 1)
    )}</strong> ${weatherApi.forecastData.daily[1].temp.day} °F`;

    this.swiper[1].innerHTML = `<img src="https://openweathermap.org/img/wn/${
      weatherApi.forecastData.daily[2].weather[0].icon
    }@2x.png"> 
    <strong>${tomorrow.toDateString(
      tomorrow.setDate(tomorrow.getDate() + 1)
    )} </strong> ${weatherApi.forecastData.daily[2].temp.day} °F`;

    this.swiper[2].innerHTML = `<img src="https://openweathermap.org/img/wn/${
      weatherApi.forecastData.daily[3].weather[0].icon
    }@2x.png"> 
    <strong>${tomorrow.toDateString(
      tomorrow.setDate(tomorrow.getDate() + 1)
    )} </strong> 
    ${weatherApi.forecastData.daily[3].temp.day} °F`;

    this.swiper[3].innerHTML = `<img src="https://openweathermap.org/img/wn/${
      weatherApi.forecastData.daily[4].weather[0].icon
    }@2x.png"> 
    <strong>${tomorrow.toDateString(
      tomorrow.setDate(tomorrow.getDate() + 1)
    )} </strong> ${weatherApi.forecastData.daily[4].temp.day} °F`;

    this.swiper[4].innerHTML = `<img src="https://openweathermap.org/img/wn/${
      weatherApi.forecastData.daily[5].weather[0].icon
    }@2x.png"> 
    <strong>${tomorrow.toDateString(
      tomorrow.setDate(tomorrow.getDate() + 1)
    )} </strong> ${weatherApi.forecastData.daily[5].temp.day} °F`;

    this.swiper[5].innerHTML = `<img src="https://openweathermap.org/img/wn/${
      weatherApi.forecastData.daily[6].weather[0].icon
    }@2x.png"> 
    <strong>${tomorrow.toDateString(
      tomorrow.setDate(tomorrow.getDate() + 1)
    )} </strong> ${weatherApi.forecastData.daily[6].temp.day} °F`;

    this.swiper[6].innerHTML = `<img src="https://openweathermap.org/img/wn/${
      weatherApi.forecastData.daily[7].weather[0].icon
    }@2x.png"> 
    <strong>${tomorrow.toDateString(
      tomorrow.setDate(tomorrow.getDate() + 1)
    )} </strong> ${weatherApi.forecastData.daily[7].temp.day} °F`;
  }

  load() {
    setTimeout(() => {
      this.spinner.classList = "inactive";
    }, 500);
  }
}
