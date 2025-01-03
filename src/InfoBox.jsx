import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import url from "./urls";
import "./infoBox.css";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

export default function InfoBox({ weather }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (weather && weather.city) {
      setLoading(true);
      setError(false);
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulate a delay for data fetching
    } else if (weather && weather.error) {
      setError(true);
      setLoading(false);
    }
  }, [weather]);

  return (
    <div className="card-container">
      <Card className="custom-card">
        {weather.humidity > 80 ? (
          <WaterDropIcon style={{ float: "right", fontSize: 40, color: "yellow" }} />
        ) : weather.temp < 20 ? (
          <AcUnitIcon style={{ float: "right", fontSize: 40, color: "yellow" }} />
        ) : weather.temp > 20 ? (
          <WbSunnyIcon style={{ float: "right", fontSize: 40, color: "yellow" }} />
        ) : (
          <SentimentSatisfiedAltIcon style={{ float: "right", fontSize: 40, color: "yellow" }} />
        )}
        <CardMedia
          sx={{ height: 140 }}
          image={
            weather.humidity > 80
              ? url.RAIN_URL
              : weather.temp > 20
              ? url.HOT_URL
              : weather.temp < 20
              ? url.COLD_URL
              : url.DEFAULT_URL // Set a default image URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="title">
            <b>Weather</b>
          </Typography>
          {loading ? (
            <CircularProgress size="30px" />
          ) : error ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              City not found. Please enter a valid city.
            </Alert>
          ) : (
            weather &&
            weather.city && (
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component="span"
                className="weather-details"
              >
                <p>
                  <b>Country:</b> {weather.country}
                </p>
                <p>
                  <b>City:</b> {weather.city}
                </p>
                <p>
                  <b>Temperature:</b> {weather.temp}&deg;C
                </p>
                <p>
                  <b>Description:</b> {weather.description}
                </p>
                <p>
                  <b>Humidity: </b>
                  {weather.humidity}%
                </p>
                <p>
                  <b>Feels like:</b> {weather.feels_like}&deg;C
                </p>
                <p>
                  <b>Min Temp:</b> {weather.minTemp}&deg;C
                </p>
                <p>
                  <b>Max Temp: </b>
                  {weather.maxTemp}&deg;C
                </p>
              </Typography>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}