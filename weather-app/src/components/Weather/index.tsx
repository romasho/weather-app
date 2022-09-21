import { useEffect } from 'react';

import { Day, Loader } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  fetchOpenWeather,
  fetchStormGlass,
  fetchImage,
  fetchOpenWeatherPosition,
} from '@/store/reducers/weatherSlice/asyncAction';
import { openWeatherUrl, openWeatherUrlForCord } from '@/utils/api';

import { Message, SectionWeather } from './component.styled';

export function Weather() {
  const dispatch = useAppDispatch();
  const { city, isFirstSource } = useAppSelector((state) => state.citySlice);
  const {
    openWeather,
    stormGlass,
    isLoading,
    errorOpen,
    errorStorm,
    latitude,
    longitude,
    expiresDate,
  } = useAppSelector((state) => state.weatherSlice);

  useEffect(() => {
    if (latitude && longitude) {
      if (!Object.prototype.hasOwnProperty.call(openWeather, city.toUpperCase())) {
        dispatch(fetchOpenWeather({ src: openWeatherUrl(latitude, longitude), city }));
      }
    }
    if (isFirstSource && latitude && longitude) {
      if (!Object.prototype.hasOwnProperty.call(stormGlass, city.toUpperCase())) {
        dispatch(fetchStormGlass({ latitude, longitude, city }));
      }
    }
  }, [latitude, longitude, isFirstSource, expiresDate]);

  useEffect(() => {
    dispatch(fetchOpenWeatherPosition({ src: openWeatherUrlForCord(city) }));

    if (openWeather[city.toUpperCase()]) {
      dispatch(fetchImage(openWeather[city.toUpperCase()][0].weather[0].main));
    }
  }, [city, isFirstSource, expiresDate]);

  return (
    <SectionWeather>
      {isLoading && !openWeather[city.toUpperCase()] && <Loader />}
      {(!isFirstSource
        ? errorOpen && !openWeather[city.toUpperCase()]
        : errorStorm && !stormGlass[city.toUpperCase()]) && (
        <Message>Sorry, something went wrong. Try another source.</Message>
      )}
      {!latitude && <Message>Invalid city name</Message>}
      {!isFirstSource &&
        openWeather[city.toUpperCase()] &&
        openWeather[city.toUpperCase()]
          .slice(0, 7)
          .map((day, index) => (
            <Day
              day={day.dt}
              imgCode={day.weather[0].icon}
              temp={day.temp.day}
              key={day.dt}
              index={index}
              pressure={day.pressure}
              humidity={day.humidity}
              night={day.temp.night}
              morn={day.temp.morn}
              speed={day.wind_speed}
              weather={day.weather[0]}
            />
          ))}
      {isFirstSource &&
        stormGlass[city.toUpperCase()] &&
        stormGlass[city.toUpperCase()]
          .slice(0, 7)
          .map((day, index) => (
            <Day
              day={Date.parse(day.time)}
              imgCode={openWeather[city.toUpperCase()][index].weather[0].icon}
              temp={day.airTemperature.noaa}
              key={day.time}
              index={index}
              pressure={day.pressure.noaa}
              humidity={day.humidity.noaa}
              night={day.airTemperature.night}
              morn={day.airTemperature.morn}
              speed={day.windSpeed.noaa}
              weather={openWeather[city.toUpperCase()][index].weather[0]}
            />
          ))}
    </SectionWeather>
  );
}
