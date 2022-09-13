import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CityState {
  city: string;
  isFirstSource: boolean;
}

//  "OpenWeather" - false | "StormGlass" - true

const STATE: CityState = {
  city: '',
  isFirstSource: true,
};

const initialState: CityState = STATE;

export const fetchCity = createAsyncThunk('city/fetchCard', async (src: string) => {
  const res = await fetch(src).then((data) => data.json());
  return res;
});

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSource: (state) => {
      state.isFirstSource = !state.isFirstSource;
    },
  },
  extraReducers: {
    [fetchCity.fulfilled.type]: (state, action) => {
      state.city = action.payload.features[0].text;
    },
  },
});

export default citySlice.reducer;
