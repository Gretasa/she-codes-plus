let place = document.querySelector("#weather-city");
let messuredTime = document.querySelector("#weather-messured-time");

let apiKey = "ce59557402d1a141a0672c568545cc55";
let apiRoot = "https://api.openweathermap.org/data/2.5";
//let apiPath = "weather";

function updateWeather(response) {
  place.innerHTML = response.data.name;
  messuredTime.innerHTML = response.data.dt;
}
let apiUrl = `${apiRoot}/weather?q=Lisbon &appid=${apiKey}`;
axios.get(apiUrl).then(updateWeather);

// let place= document.querySelector("#weather-city");
// let timestamp= docuemtn.querySelector ("#weather-timestamp");
// let description = document.querySelector("#weather-description");
// let temperature = document.querySelector("#weather-temperature");
// let humidityLevel = document.querySelector("#weather-humidity-level");
// let windSpeed = document.querySelector("#weather-wind-speed");
// let form = document.querySelector("#weather-search-form");
// let currentLocationButton = document.querySelector(
//     "#weather-current-location-button"
// );
// //let icon = document.querySelector("#weather-icon");
// let apiKey = "ce59557402d1a141a0672c568545cc55";
// let apiUrl = "https://api.openweathermap.org/data/2.5";
// let apiPath = "weather";
// let apiParams = `q=${city}&appid=${apiKey}&units=metric`;
// function refreshWeather(response) {
//     //let iconUrl = `http://openweathermap.org/img/w/${
//       //  response.data.weather[0].icon
//         //}.png`;

//     place.innerHTML = response.data.name;
//     timestamp.innerHTML = formatDate(new Date(response.data.dt * 1000));
//     description.innerHTML = response.data.weather[0].description;
//     temperature.innerHTML = Math.round(response.data.main.temp);
//     humidityLevel.innerHTML = response.data.main.humidity;
//    // icon.setAttribute("src", iconUrl);
//    // icon.setAttribute("alt", response.data.weather[0].description);
//     windSpeed.innerHTML = Math.round(response.data.wind.speed);
// };

// function search(city) {
//     let apiUrl = `${apiRoot}/weather?q=${city}&appid=${apiKey}&units=metric`;

//     axios.get(apiUrl).then(refreshWeather);
// };

//axios.get(`${apiUrl}/${apiPath}?${apiParams}`).then(function (response) {
//  let temperature = Math.round(response.data.main.temp);
//}