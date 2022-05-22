import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tokenOpenWeather } from '../constants';
import { ICoord, IStormGlassResponse, IOpenWeatherResponse } from '../models';

const BASE_URL = 'https://api.stormglass.io/v2/weather/';

const stormGlassApi = createApi({
  reducerPath: 'stormGlassApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        '809ddfba-d628-11ec-88f0-0242ac130002-809de028-d628-11ec-88f0-0242ac130002',
      );
      headers.set('Cache-Control', 'max-age=6000');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWeatherStorm: builder.query<IStormGlassResponse, { lat: string; lon: string }>({
      query: ({ lat, lon }) => ({
        url: `point?lat=${lat}&lng=${lon}&params=airTemperature`,
      }),
    }),
  }),
});

const { useGetWeatherStormQuery } = stormGlassApi;

export { stormGlassApi, useGetWeatherStormQuery };

const BASE_URL_OPEN_WEATHER = 'http://api.openweathermap.org/';

const openWeatherApi = createApi({
  reducerPath: 'openWeatherApi',
  keepUnusedDataFor: 36000,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_OPEN_WEATHER,
  }),
  endpoints: (builder) => ({
    getLocation: builder.query<ICoord[], { city: string }>({
      query: ({ city }) => ({
        url: `geo/1.0/direct?q=${city}&limit=1&appid=${tokenOpenWeather}`,
      }),
    }),
    getWeather: builder.query<IOpenWeatherResponse, { lat: string; lon: string }>({
      query: ({ lat = '', lon = '' }) => ({
        url: `data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${tokenOpenWeather}`,
      }),
    }),
  }),
});

const { useGetLocationQuery, useGetWeatherQuery } = openWeatherApi;

export { openWeatherApi, useGetWeatherQuery, useGetLocationQuery };
