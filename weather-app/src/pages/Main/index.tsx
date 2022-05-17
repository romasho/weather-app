import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Clock, EditableInput } from "../../components";
import { usePosition } from "../../hooks/usePosition";
import { fetchCity } from "../../store/reducers/citySlice";
import { Geocoding, openWeather, openWeatherDaily } from "../../constants";
import { fetchCoord, fetchWeather } from "../../store/reducers/weatherSlice";

function Main() {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.citySlice);
  const { lat, lon, weather } = useAppSelector((state) => state.weatherSlice);
  const { latitude, longitude, error } = usePosition();

  // async function setRequest(str?: string) {
  //   if (latitude && longitude) {
  //     const src = Geocoding(latitude, longitude);
  //     dispatch(fetchCity(src));
  //   }
  // }

  // useEffect(() => {
  //   setRequest();
  // }, [latitude, longitude]);

  async function setWeatherRequest(str?: string) {
    if (city) {
      const src = openWeather(city);
      dispatch(fetchCoord(src));
    }
  }

  useEffect(() => {
    setWeatherRequest();
    if (lat && lon) {
      const src = openWeatherDaily(lat, lon);
      dispatch(fetchWeather(src));
    }
  }, [city, lat, lon]);

  return (
    <div className="App">
      <Clock />
      <EditableInput />
      {weather.length > 6
        ? weather.map((day) => (
            <>
              <div>{day.temp.max.toString()}</div>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt=""
              />
              <p>
                {new Date(day.dt).toLocaleString("en-US", {
                  weekday: "long",
                })}
              </p>
            </>
          ))
        : "Not correct request"}
    </div>
  );
}

export default Main;
