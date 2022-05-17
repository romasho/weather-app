import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IWeatherPerDay {
  dt: number;
  temp: {
    day: number;
  };
  weather: [
    {
      id: number;
    }
  ];
}

interface WeatherState {
  city: string;
  lat: string;
  lon: string;
  weather: IWeatherPerDay[];
}

const initialState: WeatherState = {
  city: "",
  lat: "",
  lon: "",
  weather: [],
};

export const fetchCoord = createAsyncThunk(
  "weather/fetchCoord",
  async (src: string, thynkAPI) => {
    const res = await fetch(src).then((data) => data.json());
    return res;
  }
);

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (src: string, thynkAPI) => {
    const res = await fetch(src).then((data) => data.json());
    return res;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [fetchCoord.pending.type]: (state) => {
      // console.log("pending weather coord");
    },
    [fetchCoord.fulfilled.type]: (state, action) => {
      console.log("fulfilled weather coord", action.payload);
      if (action.payload.length > 0) {
        state.lat = action.payload[0].lat;
        state.lon = action.payload[0].lon;
      } else {
        state.lat = '';
        state.lon = '';
        state.weather = [];
      }
    },
    [fetchCoord.rejected.type]: (state) => {
      // console.log("rejected");
    },
    [fetchWeather.fulfilled.type]: (state, action) => {
      console.log("fulfilled weather");
      console.log(action.payload);
      state.weather = action.payload.daily.map((day: IWeatherPerDay) => {
        return { dt: day.dt * 1000, temp: day.temp, weather: day.weather };
      });
    },
  },
});

export default weatherSlice.reducer;
