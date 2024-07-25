const apiKey = "9K636RWPMSSZ7QL2V7MDXTKWS";

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("submit");

const city = document.getElementById("city");
const temp = document.getElementById("temperature");
const conditions = document.getElementById("conditions");
const dayDivs = document.querySelectorAll(".day");
const highLow = document.querySelectorAll(".high-low");
const fiveDayConditions = document.querySelectorAll(".five-day-condition");

async function getData(city, apiKey) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`,
    { mode: "cors" }
  );
  const weatherDataJson = await response.json();
  const weatherData = transformData(weatherDataJson);
  displayToday(weatherData);
  displayFiveDay(weatherData.fiveDay);
}

function transformData(weatherData) {
  return (data = {
    location: weatherData.resolvedAddress,
    currentTemp: weatherData.currentConditions.temp,
    weatherCondition: weatherData.currentConditions.conditions,
    fiveDay: weatherData.days.slice(0, 5),
  });
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = searchInput.value;
  getData(city, apiKey);
  searchInput.value = "";
});

function displayToday(data) {
  city.textContent = data.location;
  temp.textContent = `${Math.round(data.currentTemp)} ºF`;
  conditions.textContent = data.weatherCondition;
}

function displayFiveDay(fiveDay) {
  for (let i = 0; i < fiveDay.length; i++) {
    const datetime = fiveDay[i].datetime;
    const temps = [Math.round(fiveDay[i].tempmin), Math.round(fiveDay[i].tempmax)]
    dayDivs[i].textContent = getWeekDayFromDate(datetime);
    highLow[i].textContent = `${temps[0]}-${temps[1]} ºF`;
    fiveDayConditions[i].textContent = fiveDay[i].conditions;
  }
}

function getWeekDayFromDate(datetime) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const newDate = new Date(datetime);
  const day = days[newDate.getDay()];
  return day;
}

getData("denver", apiKey);
console.log(fiveDayConditions);
console.log(highLow);
