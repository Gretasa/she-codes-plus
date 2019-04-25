let place = document.querySelector("#weather-city");
let messuredTime = document.querySelector("#weather-messured-time");
let description = document.querySelector("#weather-description");
let temperature = document.querySelector("#weather-temperature");
let humidity = document.querySelector("#weather-humidity-level");
let windSpeed = document.querySelector("#weather-wind-speed");
let icon = document.querySelector("#weather-icon");
let form = document.querySelector("#weather-search-form");
let currentLocationButton = document.querySelector(
  "#weather-current-location-button"
);

let apiKey = "ce59557402d1a141a0672c568545cc55";
let apiRoot = "https://api.openweathermap.org/data/2.5";
let defaultCity = "Lisbon";
//let apiPath = "weather";

function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDate()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours} : ${minutes}`;
}

function updateWeather(response) {
  place.innerHTML = response.data.name;
  messuredTime.innerHTML = formatDate(new Date(response.data.dt * 1000));
  description.innerHTML = response.data.weather[0].description;
  let iconUrl = `http://openweathermap.org/img/w/${
    response.data.weather[0].icon
  }.png`;
  icon.setAttribute("src", iconUrl);
  icon.setAttribute("alt", response.data.weather[0].description);
  temperature.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

function search(city) {
  let apiUrl = `${apiRoot}/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function handleSearch(event) {
  event.preventDefault();
  let input = document.querySelector("#weather-search-text-input");

  if (input.value.length > 0) {
    search(input.value);
  } else {
    alert("Please enter a city");
  }
}

function searchPosition(position) {
  let apiUrl = `${apiRoot}/weather?lon=${position.coords.longitude}&lat=${
    position.coords.latitude
  }&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateWeather);
}

function getCurrentLocationWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

form.addEventListener("submit", handleSearch);
currentLocationButton.addEventListener("click", getCurrentLocationWeather);

search(defaultCity);
