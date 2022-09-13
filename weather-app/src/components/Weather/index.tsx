import { useEffect } from 'react';

import { Day, Loader } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  fetchOpenWeather,
  fetchStormGlass,
  fetchImage,
  fetchOpenWeatherPosition,
} from '@/store/reducers/weatherSlice/asyncAction';
import { openWeatherUrl, openWeatherUrlForCord } from '@/utils';

import { Message, SectionWeather } from './component.styled';

function Weather() {
  const dispatch = useAppDispatch();
  const { city, isFirstSource } = useAppSelector((state) => state.citySlice);
  const { openWeather, stormGlass, isLoading, errorOpen, errorStorm, lat, lon } = useAppSelector(
    (state) => state.weatherSlice
  );

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchOpenWeather({ src: openWeatherUrl(lat, lon), city }));
    }
    if (isFirstSource && lat && lon) {
      dispatch(fetchStormGlass({ lat, lng: lon, city }));
    }
  }, [lat, lon]);

  useEffect(() => {
    dispatch(fetchOpenWeatherPosition({ src: openWeatherUrlForCord(city) }));

    if (openWeather[city.toUpperCase()]) {
      dispatch(fetchImage(openWeather[city.toUpperCase()][0].weather[0].main));
    }
  }, [city]);

  return (
    <SectionWeather>
      {isLoading && !openWeather[city.toUpperCase()] && <Loader />}
      {(!isFirstSource
        ? errorOpen && !openWeather[city.toUpperCase()]
        : errorStorm && !stormGlass[city.toUpperCase()]) && (
        <Message>Sorry, something went wrong. Try another source.</Message>
      )}
      {!lat && <Message>Invalid city name</Message>}
      {!isFirstSource
        ? openWeather[city.toUpperCase()] &&
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
            ))
        : stormGlass[city.toUpperCase()] &&
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
    </SectionWeather>
  );
}

export default Weather;
