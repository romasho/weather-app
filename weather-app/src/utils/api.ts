import { tokenMapbox, tokenOpenWeather } from '../constants';

export const geocoding = (longitude: number, latitude: number) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longitude}.json?limit=1&types=place&access_token=${tokenMapbox}`;

export const openWeatherUrl = (latitude: number, longitude: number) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt={7}&units=metric&exclude=current,minutely,hourly,alerts&appid=${tokenOpenWeather}`;

export const openWeatherUrlForCord = (city: string, limit = 1) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${tokenOpenWeather}`;
