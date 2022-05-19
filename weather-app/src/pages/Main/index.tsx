import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Clock, Day, EditableInput, Today } from "../../components";
import { usePosition } from "../../hooks/usePosition";
import { fetchCity } from "../../store/reducers/citySlice";
import { ColumnBox, BackgroundBox, Section } from "./Container.styled";
import { Geocoding } from "../../utils";
import { weatherSlice, fetchImage } from "../../store/reducers/weatherSlice";
import { useGetLocationQuery, useGetWeatherQuery } from "../../services";
import { skipToken } from "@reduxjs/toolkit/dist/query";

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

  // const { data } = useGetWeatherStormQuery({
  //   lat: lat,
  //   lon: lon,
  // });

  // console.log(data);

  const { data: location, isSuccess } = useGetLocationQuery(
    !openWeather.hasOwnProperty(city) && city !== ""
      ? { city: city }
      : skipToken
  );
  const { data: weather, isSuccess: isWeatherSuccess } = useGetWeatherQuery(
    isSuccess && location.length > 0
      ? { lat: location[0].lat, lon: location[0].lon }
      : skipToken
  );

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
        </Section>
        <Section
          sx={{
            background: "rgba(35, 41, 70, 0.6)",
          }}
        >
          {openWeather[city]
            ? openWeather[city]
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
                      day={day.dt}
                      imgCode={day.weather[0].icon}
                      temp={day.temp.day}
                      key={day.dt}
                    />
                  )
                )
            : "Not correct request"}
        </Section>
      </BackgroundBox>
    </ColumnBox>
  );
}

export default Main;
