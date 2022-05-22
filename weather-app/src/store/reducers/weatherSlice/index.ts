import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  WeatherState,
  IWeatherPerDay,
  IStormGlassResponse,
  IOpenWeatherResponse,
} from "../../../models";
import { getTomorrow } from "../../../utils";
import { fetchImage, fetchOpenWeather, fetchStormGlass } from "./asyncAction";

const state: WeatherState = {
  bgImage: "",
  openWeather: {},
  stormGlass: {},
  expiresDate: String(getTomorrow()),
  isLoading: false,
  errorOpen: "",
  errorStorm: "",
};

const initialState: WeatherState =
  localStorage.getItem("WeatherState") &&
  JSON.parse(String(localStorage.getItem("WeatherState"))).expiresDate ===
    String(getTomorrow())
    ? JSON.parse(String(localStorage.getItem("WeatherState")))
    : state;


export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchImage.fulfilled.type]: (state, action) => {
      state.bgImage = action.payload.urls.regular;
    },
    [fetchOpenWeather.pending.type]: (state) => {
      state.isLoading = true;
      state.errorOpen = "";
    },
    [fetchOpenWeather.fulfilled.type]: (
      state,
      action: PayloadAction<{ city: string; res: IOpenWeatherResponse }>
    ) => {
      if (action.payload.res.errors) {
        state.errorOpen = "Not correct request";
        return;
      }
      if (
        !state.openWeather.hasOwnProperty(action.payload.city.toUpperCase())
      ) {
        state.openWeather[action.payload.city.toUpperCase()] =
          action.payload.res.daily.map((day: IWeatherPerDay) => {
            return { dt: day.dt, temp: day.temp, weather: day.weather };
          });
        state.expiresDate = String(getTomorrow());
        state.isLoading = false;
      }
      localStorage.setItem("WeatherState", JSON.stringify(state));
    },
    [fetchOpenWeather.rejected.type]: (state) => {
      state.isLoading = true;
    },
    [fetchStormGlass.pending.type]: (state) => {
      state.isLoading = true;
      state.errorStorm = "";
    },
    [fetchStormGlass.fulfilled.type]: (
      state,
      action: PayloadAction<{ city: string; res: IStormGlassResponse }>
    ) => {
      if (action.payload.res.errors) {
        state.errorStorm = "Not correct request";
        return;
      }
      if (!state.stormGlass.hasOwnProperty(action.payload.city.toUpperCase())) {
        state.stormGlass[action.payload.city.toUpperCase()] =
          action.payload.res.hours.filter(
            (hour, index) => index > 0 && (index - 12) % 24 === 0
          );
        state.expiresDate = String(getTomorrow());
        state.isLoading = false;
      }
      localStorage.setItem("WeatherState", JSON.stringify(state));
    },
    [fetchStormGlass.rejected.type]: (state, action) => {},
  },
});

export default weatherSlice.reducer;
