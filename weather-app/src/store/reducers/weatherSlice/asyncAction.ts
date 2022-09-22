import { createAsyncThunk } from '@reduxjs/toolkit';

interface IParamsPosition {
  src: string;
}

interface IParamsOpenWeather {
  src: string;
  city: string;
}

interface IParamsStormGlass {
  latitude: number;
  longitude: number;
  city: string;
}

export const fetchOpenWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ src, city }: IParamsOpenWeather, thynkAPI) => {
    try {
      const res = await fetch(src).then((data) => data.json());
      return { res, city };
    } catch (e) {
      return thynkAPI.rejectWithValue('Error');
    }
  }
);

export const fetchOpenWeatherPosition = createAsyncThunk(
  'weather/fetchPosition',
  async ({ src }: IParamsPosition, thynkAPI) => {
    try {
      const res = await fetch(src).then((data) => data.json());
      return { res };
    } catch (e) {
      return thynkAPI.rejectWithValue('Error');
    }
  }
);

export const fetchStormGlass = createAsyncThunk(
  'weather/fetchWeatherStormGlass',
  async ({ latitude, longitude, city }: IParamsStormGlass, thynkAPI) => {
    try {
      const res = await fetch(
        `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=airTemperature,humidity,pressure,windSpeed`,
        {
          headers: {
            Authorization:
              '809ddfba-d628-11ec-88f0-0242ac130002-809de028-d628-11ec-88f0-0242ac130002',
          },
        }
      ).then((data) => data.json());
      return { res, city };
    } catch (e) {
      return thynkAPI.rejectWithValue('Error');
    }
  }
);

export const fetchImage = createAsyncThunk(
  'weather/fetchImage',
  async (WeatherMain: string, thynkAPI) => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/random?orientation=landscape&query=${WeatherMain}&client_id=ki8jihwvAV1A8W4WBkNVcgK8NP-dUdxocfg_brGsuxE`
      ).then((data) => data.json());
      return res;
    } catch (e) {
      return thynkAPI.rejectWithValue('Error');
    }
  }
);
