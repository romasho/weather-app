import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tokenOpenWeather } from '../constants';
import { ICoord, IOpenWeatherResponse } from '../models';

const BASE_URL_OPEN_WEATHER = 'https://api.openweathermap.org/';

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
