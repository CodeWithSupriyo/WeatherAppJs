const apikey = 'c44025824eca9a9dd813b9481fe16f66';
const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")

const weatherImage = document.querySelector("#weather")
const temph1 = document.querySelector("#st1temph1")
const feelsLikeh4 = document.querySelector("#feelsLikeh4")
const humitityText = document.querySelector("#humitityText")
const windText = document.querySelector("#windText")
const nameH1 = document.querySelector("#nameH1")

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apikey}`)
  var data = await response.json()

  temph1.innerHTML = data.main.temp
  feelsLikeh4.innerHTML = data.main.feels_like + "°C"
  if (data.clouds.all <= 10) {
    weatherImage.src = "/images/clear.png"
  } else if (data.clouds.all <= 40) {
    weatherImage.src = "/images/mist.png"
  } else if (data.clouds.all <= 95) {
    weatherImage.src = "/images/clouds.png"
  }
  if (data.weather[0].main == "Rain") {
    weatherImage.src = "/images/rain.png"
  } else if (data.weather[0].main == "Drizzle") {
    weatherImage.src = "/images/drizzle.png"
  } else if (data.weather[0].main == "Mist") {
    weatherImage.src = "/images/mist.png"
  }

  if (data.main.temp <= 0) {
    weatherImage.src = "/images/snow.png"
  }

  humitityText.innerHTML = data.main.humidity + "%"
  windText.innerHTML = data.wind.speed + "km/h"
  nameH1.innerHTML = data.name
  console.log(data)
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value)
})