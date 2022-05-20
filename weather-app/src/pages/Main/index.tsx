import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  Clock,
  Day,
  EditableInput,
  Today,
  SourceSettings,
} from "../../components";
import { usePosition } from "../../hooks/usePosition";
import { fetchCity } from "../../store/reducers/citySlice";
import { ColumnBox, BackgroundBox, Section } from "./Container.styled";
import { Geocoding } from "../../utils";
import { weatherSlice, fetchImage } from "../../store/reducers/weatherSlice";
import { useGetLocationQuery, useGetWeatherQuery } from "../../services";
import { Typography } from "@mui/material";
import { theme } from "../../theme";

function Main() {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.citySlice);
  const { latitude, longitude, error } = usePosition();
  const { bgImage, openWeather } = useAppSelector(
    (state) => state.weatherSlice
  );

  async function getPosition() {
    if (latitude && longitude && !error && !city) {
      const src = Geocoding(latitude, longitude);
      dispatch(fetchCity(src));
    }
  }

  useEffect(() => {
    getPosition();
  }, [latitude, longitude]);

  const { data: location } = useGetLocationQuery(
    { city: city },
    { skip: !openWeather.hasOwnProperty(city) && !city }
  );

  const { lat, lon } = location?.length ? location[0] : { lat: "", lon: "" };

  const {
    data: weather,
    isSuccess: isWeatherSuccess,
    isError,
  } = useGetWeatherQuery(
    {
      lat: lat,
      lon: lon,
    }
  );

    // const { data } = useGetWeatherStormQuery({
  //   lat: lat,
  //   lon: lon,
  // });


  useEffect(() => {
    if (isWeatherSuccess) {
      dispatch(fetchImage(weather.daily[0].weather[0].main));
      dispatch(
        weatherSlice.actions.addToOpenWeather({
          city: city,
          weather: weather.daily,
        })
      );
      console.log(location, weather);
    }
  }, [isWeatherSuccess]);

  return (
    <ColumnBox
      style={{
        backgroundImage: `url(${bgImage || "./шфидщ.png"})`,
      }}
    >
      <BackgroundBox
        style={{
          backgroundImage: `url(${bgImage || "./шфидщ.png"})`,
        }}
      >
        <Section>
          <Clock />
          <EditableInput />
          <SourceSettings />
        </Section>
        <Section
          sx={{
            background: "rgba(35, 41, 70, 0.6)",
          }}
        >
          {isError ? (
            <Typography
              sx={{ p: "10px 10px", fontWeight: "bold", fontSize: "2.5rem" }}
              color={theme.palette.text.primary}
            >
              Not correct request
            </Typography>
          ) : !openWeather.hasOwnProperty(city) ? (
            weather?.daily
              .slice(0, 7)
              .map((day, index) =>
                index === 0 ? (
                  <Today
                    imgCode={day.weather[0].icon}
                    temp={day.temp.day}
                    key={day.dt}
                  />
                ) : (
                  <Day
                    day={day.dt * 1000}
                    imgCode={day.weather[0].icon}
                    temp={day.temp.day}
                    key={day.dt}
                  />
                )
              )
          ) : (
            openWeather[city]
              .slice(0, 7)
              .map((day, index) =>
                index === 0 ? (
                  <Today
                    imgCode={day.weather[0].icon}
                    temp={day.temp.day}
                    key={day.dt}
                  />
                ) : (
                  <Day
                    day={day.dt * 1000}
                    imgCode={day.weather[0].icon}
                    temp={day.temp.day}
                    key={day.dt}
                  />
                )
              )
          )}
        </Section>
      </BackgroundBox>
    </ColumnBox>
  );
}

export default Main;
