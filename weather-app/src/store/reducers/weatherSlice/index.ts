import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  WeatherState,
  IWeatherPerDay,
  IStormGlassResponse,
  IOpenWeatherResponse,
  ICoord,
  ITempInfo,
} from '@/types';
import { getTomorrow } from '@/utils';

import {
  fetchImage,
  fetchOpenWeather,
  fetchStormGlass,
  fetchOpenWeatherPosition,
} from './asyncAction';

const STATE: WeatherState = {
  bgImage: '',
  openWeather: {},
  stormGlass: {},
  expiresDate: getTomorrow(),
  isLoading: false,
  errorOpen: '',
  errorStorm: '',
  latitude: 0,
  longitude: 0,
};

const initialState: WeatherState = STATE;

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<{ latitude: number; longitude: number }>) => {
      state.latitude = +action.payload.latitude;
      state.longitude = +action.payload.longitude;
    },
    clearWeatherDate: (state) => {
      state.openWeather = {};
      state.stormGlass = {};
      state.expiresDate = getTomorrow();
      state.isLoading = false;
    },
  },
  extraReducers: {
    [fetchImage.fulfilled.type]: (state, action) => {
      state.bgImage = action.payload.urls.regular;
    },
    [fetchOpenWeather.pending.type]: (state) => {
      state.isLoading = true;
      state.errorOpen = '';
    },
    [fetchOpenWeather.fulfilled.type]: (
      state,
      action: PayloadAction<{ city: string; res: IOpenWeatherResponse }>
    ) => {
      if (action.payload.res.errors) {
        state.errorOpen = 'Not correct request';
        return;
      }
      state.openWeather[action.payload.city.toUpperCase()] = action.payload.res.daily
        .map((day: IWeatherPerDay) => ({
          dt: day.dt * 1000,
          temp: {
            day: Math.floor(day.temp.day),
            night: Math.floor(day.temp.night),
            morn: Math.floor(day.temp.morn),
          },
          weather: day.weather,
          humidity: Math.floor(day.humidity),
          pressure: Math.floor(day.pressure),
          wind_speed: day.wind_speed,
        }))
        .slice(0, 7);
      state.expiresDate = getTomorrow();
      state.isLoading = false;
    },
    [fetchOpenWeather.rejected.type]: (state) => {
      state.isLoading = true;
    },
    [fetchStormGlass.pending.type]: (state) => {
      state.isLoading = true;
      state.errorStorm = '';
    },
    [fetchStormGlass.fulfilled.type]: (
      state,
      action: PayloadAction<{ city: string; res: IStormGlassResponse }>
    ) => {
      if (action.payload.res.errors) {
        state.errorStorm = 'Not correct request';
        return;
      }

      const res = action.payload.res.hours
        .filter((hour, index) => index > 0 && (index - 12) % 24 === 0)
        .map((day: ITempInfo) => ({
          airTemperature: {
            noaa: Math.floor(day.airTemperature.noaa),
            morn: 0,
            night: 0,
          },
          time: day.time,
          pressure: {
            noaa: Math.floor(day.pressure.noaa),
          },
          humidity: {
            noaa: Math.floor(day.humidity.noaa),
          },
          windSpeed: {
            noaa: Math.floor(day.windSpeed.noaa * 2.237),
          },
        }));
      const morn = action.payload.res.hours.filter(
        (hour, index) => index > 0 && (index - 8) % 24 === 0
      );

      const night = action.payload.res.hours.filter(
        (hour, index) => index > 0 && (index - 20) % 24 === 0
      );
      res.forEach((el, index) => {
        el.airTemperature.morn = Math.floor(morn[index].airTemperature.noaa);
        el.airTemperature.night = Math.floor(night[index].airTemperature.noaa);
      });

      state.stormGlass[action.payload.city.toUpperCase()] = res.slice(0, 7);
      state.expiresDate = getTomorrow();
      state.isLoading = false;
    },
    [fetchOpenWeatherPosition.pending.type]: (state) => {
      state.isLoading = true;
      state.errorOpen = '';
    },
    [fetchOpenWeatherPosition.fulfilled.type]: (
      state,
      action: PayloadAction<{ res: ICoord[] }>
    ) => {
      if (action.payload.res?.length) {
        state.latitude = +action.payload.res[0].lat;
        state.longitude = +action.payload.res[0].lon;
      } else {
        state.isLoading = false;
        state.errorOpen = 'error';
        state.latitude = 0;
        state.longitude = 0;
      }
    },
    [fetchOpenWeatherPosition.rejected.type]: (state) => {
      state.isLoading = false;
      state.errorOpen = 'error';
    },
  },
});

export default weatherSlice.reducer;
