export enum AppRoutes {
  ERROR = "*",
  MAIN = "/",
}

export const LS_LOGIN = "rss-cream-login-value";
const tokenMapbox =
  "pk.eyJ1Ijoicm9tYXNobyIsImEiOiJjbDM4b3J1eW0wMXlkM2tueHd3aDMzdnVmIn0.oTvcz02NvyWmUXSfbjYHYw";

export const Geocoding = (longitude: number, latitude: number) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${latitude},${longitude}.json?limit=1&types=place&access_token=${tokenMapbox}`;

const tokenOpenWeather = 'a4aea9a90180fe39dec1e62d7edd286b';

export const openWeather = (city: string) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${tokenOpenWeather}`;

  export const openWeatherDaily = (lat: string, lon: string) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${tokenOpenWeather}`;
