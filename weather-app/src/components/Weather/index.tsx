import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Section } from "../../pages/Main/Container.styled";
import { useGetLocationQuery } from "../../services";
import {
  fetchImage,
  fetchOpenWeather,
  fetchStormGlass,
} from "../../store/reducers/weatherSlice";
import { theme } from "../../theme";
import { openWeatherUrl } from "../../utils";
import Day from "../Day";

function Weather() {
  const dispatch = useAppDispatch();
  const { city, isfirstSource } = useAppSelector((state) => state.citySlice);
  const { openWeather, stormGlass } =
    useAppSelector((state) => state.weatherSlice);

  const { data: location } = useGetLocationQuery(
    { city: city },
    {
      skip:
        (isfirstSource
          ? openWeather.hasOwnProperty(city.toUpperCase())
          : stormGlass.hasOwnProperty(city.toUpperCase())) && !!city,
    }
  );

  const { lat, lon } = location?.length ? location[0] : { lat: "", lon: "" };

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchOpenWeather({ src: openWeatherUrl(lat, lon), city }));
    }
    if (!isfirstSource) {
      dispatch(fetchStormGlass({ lat, lng: lon, city }));
    }
  }, [lat, lon]);

  useEffect(() => {
    if (openWeather[city.toUpperCase()]) {
      dispatch(fetchImage(openWeather[city.toUpperCase()][0].weather[0].main));
    }
  }, [city]);

  return (
    <Section
      sx={{
        background: "rgba(35, 41, 70, 0.6)",
      }}
    >
      {!openWeather[city.toUpperCase()] && (
        <Typography
          sx={{ p: "10px 10px", fontWeight: "bold", fontSize: "2.5rem" }}
          color={theme.palette.text.primary}
        >
          Not correct request
        </Typography>
      )}
      {isfirstSource ? openWeather[city.toUpperCase()] &&
        openWeather[city.toUpperCase()]
          .slice(0, 7)
          .map((day, index) => (
            <Day
              day={day.dt * 1000}
              imgCode={day.weather[0].icon}
              temp={day.temp.day}
              key={day.dt}
              index={index}
            />
          )) : stormGlass[city.toUpperCase()] &&
          stormGlass[city.toUpperCase()]
            .slice(0, 7)
            .map((day, index) => (
              <Day
                day={Date.parse(day.time)}
                imgCode={openWeather[city.toUpperCase()][index].weather[0].icon}
                temp={day.airTemperature.noaa}
                key={day.time}
                index={index}
              />
            ))}
    </Section>
  );
}

export default Weather;
