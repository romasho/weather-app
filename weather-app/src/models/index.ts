export interface ITempInfo {
  airTemperature: { noaa: number; sg: number; night: number; morn: number };
  time: string;
  pressure: { noaa: number };
  humidity: { noaa: number };
  windSpeed: { noaa: number };
}

export interface IStormGlassResponse {
  hours: ITempInfo[];
  errors?: Record<string, unknown>;
}

export interface ICoord {
  lat: string;
  lon: string;
  name: string;
}

export interface IWeatherPerDay {
  dt: number;
  temp: {
    day: number;
    night: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  wind_speed: number;
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
  errors?: Record<string, unknown>;
}

export interface IOpenWeather {
  [key: string]: IWeatherPerDay[];
}

export interface IStormGlass {
  [key: string]: ITempInfo[];
}

export interface WeatherState {
  bgImage: string;
  openWeather: IOpenWeather;
  stormGlass: IStormGlass;
  expiresDate: string;
  isLoading: boolean;
  errorOpen: string;
  errorStorm: string;
  lat: string;
  lon: string;
}

export interface ITask {
  date: string;
  time: string;
  title: string;
}

export interface ITaskstate {
  tasks: ITask[];
}
