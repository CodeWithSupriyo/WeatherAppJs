const apikey = 'c44025824eca9a9dd813b9481fe16f66';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?'
const airConditionUrl = 'https://api.openweathermap.org/data/2.5/air_pollution?'

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")

const weatherImage = document.querySelector("#weather")
const temph1 = document.querySelector("#st1temph1")
const feelsLikeh4 = document.querySelector("#feelsLikeh4")
const humitityText = document.querySelector("#humitityText")
const windText = document.querySelector("#windText")
const nameH1 = document.querySelector("#nameH1")
const date = document.querySelector("#date")
const hours = document.querySelector("#hours")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")
const dayName = document.querySelector("#dayName")
const day = document.querySelector("#day")
const month = document.querySelector("#month")
const locationCard1 = document.querySelector("#location")
const imgWind = document.querySelector("#imgWind")
const airPressure = document.querySelector("#airPressure")
const visibility = document.querySelector("#visibility")
const imgPorcast1st = document.querySelector("#imgPorcast1st")
const imgPorcast2st = document.querySelector("#imgPorcast2st")
const imgPorcast3st = document.querySelector("#imgPorcast3st")
const porcast1stTemp = document.querySelector("#porcast1stTemp")
const porcast2stTemp = document.querySelector("#porcast2stTemp")
const porcast3stTemp = document.querySelector("#porcast3stTemp")
const porcast1stTime = document.querySelector("#porcast1stTime")
const porcast2stTime = document.querySelector("#porcast2stTime")
const porcast3stTime = document.querySelector("#porcast3stTime")
const airConditionHTML = document.querySelector("#airCondition")

setInterval(() => {
  let currentTime = new Date()

  hours.innerHTML = currentTime.getHours()
  min.innerHTML = currentTime.getMinutes()
  sec.innerHTML = currentTime.getSeconds()

  const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]

  const mounthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  let getDay = currentTime.getDay()

  let getMonth = currentTime.getMonth()

  dayName.innerHTML = dayNames[getDay]
  day.innerHTML = currentTime.getDate()
  month.innerHTML = mounthNames[getMonth]
}, 1000)

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
  imgWind.style.transform = "rotate(" + `${data.wind.deg}` + "deg)"
  airPressure.innerHTML = data.main.pressure + "hPa"
  visibility.innerHTML = data.visibility / 1000 + "km"

  forecastWeather(data.coord.lat, data.coord.lon)
  airCondition(data.coord.lat, data.coord.lon)
}

async function forecastWeather(lat, lon) {
  const response = await fetch(url2 + `lat=${lat}` + `&lon=${lon}` + `&appid=${apikey}`)
  var data = await response.json()

  if (data.list[0].weather[0].main === "Clouds") {
    imgPorcast1st.src = "/images/clouds.png"
  } else if (data.list[0].weather[0].main === "Clear") {
    imgPorcast1st.src = "/images/clear.png"
  } else if (data.list[0].weather[0].main === "Drizzle") {
    imgPorcast1st.src = "/images/drizzle.png"
  } else if (data.list[0].weather[0].main === "Rain") {
    imgPorcast1st.src = "/images/rain.png"
  } else if (data.list[0].weather[0].main === "Mist") {
    imgPorcast1st.src = "/images/mist.png"
  } else if (data.list[0].weather[0].main == "Snow") {
    imgPorcast1st.src = "/images/snow.png"
  }

  if (data.list[1].weather[0].main === "Clouds") {
    imgPorcast2st.src = "/images/clouds.png"
  } else if (data.list[1].weather[0].main === "Clear") {
    imgPorcast2st.src = "/images/clear.png"
  } else if (data.list[1].weather[0].main === "Drizzle") {
    imgPorcast2st.src = "/images/drizzle.png"
  } else if (data.list[1].weather[0].main === "Rain") {
    imgPorcast2st.src = "/images/rain.png"
  } else if (data.list[1].weather[0].main === "Mist") {
    imgPorcast2st.src = "/images/mist.png"
  } else if (data.list[1].weather[0].main == "Snow") {
    imgPorcast2st.src = "/images/snow.png"
  }

  if (data.list[2].weather[0].main === "Clouds") {
    imgPorcast3st.src = "/images/clouds.png"
  } else if (data.list[2].weather[0].main === "Clear") {
    imgPorcast3st.src = "/images/clear.png"
  } else if (data.list[2].weather[0].main === "Drizzle") {
    imgPorcast3st.src = "/images/drizzle.png"
  } else if (data.list[2].weather[0].main === "Rain") {
    imgPorcast3st.src = "/images/rain.png"
  } else if (data.list[2].weather[0].main === "Mist") {
    imgPorcast3st.src = "/images/mist.png"
  } else if (data.list[2].weather[0].main == "Snow") {
    imgPorcast3st.src = "/images/snow.png"
  }

  porcast1stTime.innerHTML = data.list[0].dt_txt
  porcast2stTime.innerHTML = data.list[1].dt_txt
  porcast3stTime.innerHTML = data.list[2].dt_txt

  porcast1stTemp.innerHTML = Math.round(data.list[0].main.temp - 273.15) + "°C"
  porcast2stTemp.innerHTML = Math.round(data.list[1].main.temp - 273.15) + "°C"
  porcast3stTemp.innerHTML = Math.round(data.list[2].main.temp - 273.15) + "°C"
}

async function airCondition(lat, lon) {
  const response = await fetch(airConditionUrl + `lat=${lat}` + `&lon=${lon}` + `&appid=${apikey}`)
  var data = await response.json()

  if (data.list[0].components.so2 <= 20) {
    airConditionHTML.innerHTML = "Good"
  } else if (data.list[0].components.so2 <= 80) {
    airConditionHTML.innerHTML = "Fair"
  } else if (data.list[0].components.so2 <= 250) {
    airConditionHTML.innerHTML = "Moderate"
  } else if (data.list[0].components.so2 <= 320) {
    airConditionHTML.innerHTML = "Poor"
  } else {
    airConditionHTML.innerHTML = "Very Poor"
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value)
})