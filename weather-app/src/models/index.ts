export interface ITempInfo {
  airTemperature: { noaa: number; sg: number };
  time: string;
}

export interface IStormGlassData {
  hours: ITempInfo[];
}

export interface ICoord {
  lat: string;
  lon: string;
}

export interface IWeatherPerDay {
  dt: number;
  temp: {
    day: number;
  };
  weather: [
    {
      id: number;
      icon: string;
      main: string;
    }
  ];
}

export interface IOpenWeatherResponse {
  daily: IWeatherPerDay[];
  timezone: string;
  lat: number;
  lon: number;
}

export interface IOpenWeather {
  [key: string]: IWeatherPerDay[];
}

export interface IStormGlass {
  [key: string]: IWeatherPerDay[];
}

export interface WeatherState {
  bgImage: string;
  openWeather: IOpenWeather;
  stormGlass: IStormGlass;
}
