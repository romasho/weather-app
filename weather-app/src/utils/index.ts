import { tokenMapbox, tokenOpenWeather } from '../constants';

export const Geocoding = (longitude: number, latitude: number) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longitude}.json?limit=1&types=place&access_token=${tokenMapbox}`;

export const openWeatherUrl = (lat: string, lon: string) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt={7}&units=metric&exclude=current,minutely,hourly,alerts&appid=${tokenOpenWeather}`;

export const openWeatherUrlForCord = (city: string) =>
  `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${tokenOpenWeather}`;

export function getTomorrow() {
  const now = new Date();

  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return tomorrow;
}

export function getTodayForExpire() {
  const now = new Date();

  const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return current;
}

export function getToday() {
  const now = new Date();

  const today = now.toISOString().split('T')[0];

  return today;
}
