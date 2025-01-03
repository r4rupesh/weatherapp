import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import getWeatherData from "./main";

export default function SearchBox({ updateWeather }) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const weather = await getWeatherData(city);
    if (weather) {
      updateWeather(weather);
    } else {
      updateWeather({ error: true });
    }
    setCity("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          onChange={handleChange}
          required
          value={city}
        />
        <br /><br />
        <Button type="submit" variant="contained" color="primary">
          Get Weather
        </Button>
      </form>
    </>
  );
}