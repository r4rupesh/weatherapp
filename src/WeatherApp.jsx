import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import getWeatherData from "./main";

export default function WeatherApp() {
  const [weather, setWeather] = useState({
  });

  const updateWeather = (newWeather) => {
    setWeather(newWeather);
  };

  return (
    <>
      <h1 className="appName">Weather app</h1>
      <SearchBox updateWeather={updateWeather} />
      <InfoBox weather={weather} />
    
    </>
  );
}