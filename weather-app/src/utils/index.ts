import { tokenOpenWeather, tokenMapbox } from "../constants";

export const openWeather = (city: string) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${tokenOpenWeather}`;

export const openWeatherDaily = (lat: string, lon: string) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${tokenOpenWeather}`;

export const Geocoding = (longitude: number, latitude: number) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longitude}.json?limit=1&types=place&access_token=${tokenMapbox}`;
