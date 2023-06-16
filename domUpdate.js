import { weatherData } from "./weather.js";

//DOM Elements
let placeName = document.querySelector(".place-name");
let countryName = document.querySelector(".country-name");
let feelsLike = document.querySelector(".feels-like");
let locationInputField = document.querySelector("#input-location");
let searchLocationBtn = document.querySelector("#search-location");
let temperature = document.querySelector(".temperature");
let conditionText = document.querySelector(".condition-text");
let conditionImg = document.querySelector(".condition-img>img");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind-speed");

let searchLocation = "Tokyo";

searchLocationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    changeWeatherData();
}
)

locationInputField.closest("form").addEventListener("submit", (e) => {
    e.preventDefault();
    changeWeatherData();

})

function changeWeatherData(location = locationInputField.value) {
    if (location === "") return;
    weatherData(location)
        .then(data => {
            update(data);
        })
        .catch(err => {
            alert(err);
            alert("Could not find the entered location");
        })
}

function update(data) {

    placeName.textContent = data.location.name;
    countryName.textContent = data.location.country;
    feelsLike.textContent = `Feels like ${data.feels_like}°C`;
    temperature.textContent = `${data.temp_c}°C`;

    conditionText.textContent = data.condition.text;
    conditionImg.src = "https://" + data.condition.icon;
    humidity.textContent = `Humidity levels: ${data.humidity}%`;
    windSpeed.textContent = `Wind speed: ${data.wind_kph} km/h`;
}

do {
    changeWeatherData("Tokyo")
} while (false);
