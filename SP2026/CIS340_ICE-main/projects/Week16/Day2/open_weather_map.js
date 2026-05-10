const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
  // Use fetch() to call the weather API
  return fetch(zipUrl(zip))
  // Convert the raw HTTP response into JSON format
  .then(response => response.json())

  // Process the JSON data and extract only the relevant information
  .then(responseJSON => {
    return {
      // Main weather condition (Rain, Clear, Cloudy, etc)
      main: responseJSON.weather[0].main,

      // More detailed description
      description: responseJSON.weather[0].description,

      // Current temperature in Farenheit
      temp: responseJSON.main.temp,

      // Feels-like temperature
      feels_like: responseJSON.main.feels_like,

      // Minimum temperature
      temp_min: responseJSON.main.temp_min,

      // Maximum temperature
      temp_max: responseJSON.main.temp_max,

      // Humidity percentage
      humidity: responseJSON.main.humidity,

      // Wind speed in miles/hour
      wind_speed: responseJSON.wind.speed,

      // Wind direction in degrees 
      wind_deg: responseJSON.wind.deg,

      // Atmosphere pressure in hPa (hectpascals)
      pressure: responseJSON.main.pressure,

      // Visibility in meters
      visibility: responseJSON.visibility,

      // Time of sunrise converted to a readable local time string'
      sunrise: new Date(responseJSON.sys.sunrise * 1000).toLocaleTimeString(),
      
      // Time of sunset converted to a readable local time string
      sunset: new Date(responseJSON.sys.sunset * 1000).toLocaleTimeString(),

      // Name of the city 
      city: responseJSON.name,

      // Country Code 
      country: responseJSON.sys.country,

      // Icon code used to display the weather image
      icon: responseJSON.weather[0].icon
    };
  }) 

  // Catch and log any error that happens during the fetch or data processing
.catch(error => { 
  console.error(error);
});

}

export default { fetchForecast };
