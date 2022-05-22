import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  WeatherState,
  IWeatherPerDay,
  IStormGlassResponse,
  IOpenWeatherResponse,
} from "../../../models";
import { getTomorrow } from "../../../utils";

const state: WeatherState = {
  bgImage: "",
  openWeather: {},
  stormGlass: {},
  expiresDate: String(getTomorrow()),
  isOpenWeatherLoaded: false,
  isOpenWeatherError: false,
  isLocationUnCorrect: false,
};

const initialState: WeatherState =
  localStorage.getItem("WeatherState") &&
  JSON.parse(String(localStorage.getItem("WeatherState"))).expiresDate ===
    String(getTomorrow())
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
  "weather/fetchWeather",
  async ({ src, city }: II, thynkAPI) => {
    const res = await fetch(src).then((data) => data.json());
    return { res, city };
  }
);

export const fetchStormGlass = createAsyncThunk(
  "weather/fetchWeatherStormGlass",
  async ({ lat, lng, city }: III, thynkAPI) => {
    const res = await fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=airTemperature`,
      {
        headers: {
          Authorization:
            "809ddfba-d628-11ec-88f0-0242ac130002-809de028-d628-11ec-88f0-0242ac130002",
        },
      }
    ).then((data) => data.json());
    return { res, city };
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    errorRequest: (state) => {
      state.isLocationUnCorrect = true;
    },
  },
  extraReducers: {
    [fetchImage.fulfilled.type]: (state, action) => {
      state.bgImage = action.payload.urls.regular;
    },
    [fetchOpenWeather.pending.type]: (state) => {
      state.isOpenWeatherLoaded = false;
    },
    [fetchOpenWeather.fulfilled.type]: (
      state,
      action: PayloadAction<{ city: string; res: IOpenWeatherResponse }>
    ) => {
      if (!state.openWeather.hasOwnProperty(action.payload.city.toUpperCase())) {
        state.openWeather[action.payload.city.toUpperCase()] = action.payload.res.daily.map(
          (day: IWeatherPerDay) => {
            return { dt: day.dt, temp: day.temp, weather: day.weather };
          }
        );
        state.expiresDate = String(getTomorrow());
        state.isOpenWeatherLoaded = true;
      }
      localStorage.setItem("WeatherState", JSON.stringify(state));
    },
    [fetchOpenWeather.rejected.type]: (state) => {},
    [fetchStormGlass.fulfilled.type]: (
      state,
      action: PayloadAction<{ city: string; res: IStormGlassResponse }>
    ) => {
      if (!state.stormGlass.hasOwnProperty(action.payload.city.toUpperCase())) {
        state.stormGlass[action.payload.city.toUpperCase()] = action.payload.res.hours.filter(
          (hour, index) =>
            index > 0 && (index - 12) % 24 === 0
        );
        state.expiresDate = String(getTomorrow());
      }
      localStorage.setItem("WeatherState", JSON.stringify(state));
    },
  },
});

export default weatherSlice.reducer;
