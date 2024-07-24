const apiKey = "9K636RWPMSSZ7QL2V7MDXTKWS";

const searchInput = document.getElementById('search');
const searchButton = document.getElementById('submit')

async function getData(city, apiKey) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`,
    { mode: "cors" }
  );
  const weatherDataJson = await response.json();
  console.log(weatherDataJson);
  const weatherData = transformData(weatherDataJson);
  console.log(weatherData);
}

function transformData(weatherData) {
  return (data = {
    location: weatherData.resolvedAddress,
    currentTemp: weatherData.currentConditions.temp,
    weatherCondition: weatherData.currentConditions.conditions,
    fiveDay: weatherData.days.slice(0, 5),
  });
}

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const city = searchInput.value;
    getData(city, apiKey);
    searchInput.value = "";
})

getData("denver", apiKey);
