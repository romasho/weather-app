import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherState, IWeatherPerDay } from "../../../models";

const state: WeatherState = {
  bgImage: "",
  openWeather: {},
  stormGlass: {},
};

const initialState: WeatherState = localStorage.getItem("WeatherState")
  ? JSON.parse(String(localStorage.getItem("WeatherState")))
  : state;

export const fetchImage = createAsyncThunk(
  "weather/fetchImage",
  async (WeatherMain: string, thynkAPI) => {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?orientation=landscape&query=${WeatherMain}&client_id=ki8jihwvAV1A8W4WBkNVcgK8NP-dUdxocfg_brGsuxE`
    ).then((data) => data.json());
    return res;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addToOpenWeather: (
      state,
      action: PayloadAction<{ city: string; weather: IWeatherPerDay[] }>
    ) => {
      if (!state.openWeather.hasOwnProperty(action.payload.city)) {
        state.openWeather[action.payload.city] = action.payload.weather;
      }
      localStorage.setItem("WeatherState", JSON.stringify(state));
    },
  },
  extraReducers: {
    [fetchImage.fulfilled.type]: (state, action) => {
      console.log("fulfilled image");
      state.bgImage = action.payload.urls.regular;
    },
  },
});

export default weatherSlice.reducer;
