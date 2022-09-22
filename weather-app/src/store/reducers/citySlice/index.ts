import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

//  "OpenWeather" - false | "StormGlass" - true

const initialState = {
  city: '',
  isFirstSource: false,
};

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
