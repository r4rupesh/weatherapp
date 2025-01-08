import url from "./urls";

async function getWeatherData(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${url.API_KEY}&units=metric`;
  try {
    let data = await fetch(URL);
    if (!data.ok) {
      throw new Error("City not found");
    }
    let jsonData = await data.json();
    console.log(jsonData);

    let weather = {
      country: jsonData.sys.country,
      city: jsonData.name,
      temp: jsonData.main.temp,
      description: jsonData.weather[0].description,
      humidity: jsonData.main.humidity,
      feels_like: jsonData.main.feels_like,
      minTemp: jsonData.main.temp_min,
      maxTemp: jsonData.main.temp_max,
    };
    console.log(weather);
    return weather;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getWeatherData;