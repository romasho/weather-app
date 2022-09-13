import { createAsyncThunk } from '@reduxjs/toolkit';

interface I {
  src: string;
}

interface II {
  src: string;
  city: string;
}

interface III {
  lat: string;
  lng: string;
  city: string;
}

export const fetchOpenWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ src, city }: II, thynkAPI) => {
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
  async ({ src }: I, thynkAPI) => {
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
  async ({ lat, lng, city }: III, thynkAPI) => {
    try {
      const res = await fetch(
        `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=airTemperature`,
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
