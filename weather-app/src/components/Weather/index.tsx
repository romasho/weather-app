import { Typography } from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Section } from "../../pages/Main/Container.styled";
import {
  useGetLocationQuery,
  useGetWeatherQuery,
  useGetWeatherStormQuery,
} from "../../services";
import { weatherSlice, fetchImage } from "../../store/reducers/weatherSlice";
import { theme } from "../../theme";
import Day from "../Day";
import Today from "../Today";

function Weather() {
  const dispatch = useAppDispatch();
  const { city, isfirstSource } = useAppSelector((state) => state.citySlice);
  const { openWeather, stormGlass } = useAppSelector(
    (state) => state.weatherSlice
  );

  const { data: location } = useGetLocationQuery(
    { city: city },
    { skip: (isfirstSource ? openWeather.hasOwnProperty(city) : stormGlass.hasOwnProperty(city)) && !!city}
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
    },
    { skip: openWeather.hasOwnProperty(city) && isfirstSource }
  );

  const { data, isSuccess: isStormGlassSucces } = useGetWeatherStormQuery(
    {
      lat: lat,
      lon: lon,
    },
    { skip: stormGlass.hasOwnProperty(city) ? isfirstSource : stormGlass.hasOwnProperty(city) }
  );

  console.log(stormGlass.hasOwnProperty(city) ? isfirstSource : stormGlass.hasOwnProperty(city))

  useEffect(() => {
    if (isWeatherSuccess) {
      dispatch(fetchImage(weather.daily[0].weather[0].main));
      dispatch(
        weatherSlice.actions.addToOpenWeather({
          city: city,
          weather: weather.daily,
        })
      );
    }
    if (isStormGlassSucces) {
      dispatch(
        weatherSlice.actions.addToStormGlass({
          city: city,
          weather: data.hours,
        })
      );
    }
  }, [weather, data]);

  return (
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
  );
}

export default Weather;
