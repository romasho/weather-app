import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CityState {
  city: string;
  isfirstSource: boolean;
}

//  "OpenWeather" - false | "StormGlass" - true

const STATE: CityState = {
  city: '',
  isfirstSource: true,
};

const initialState: CityState = localStorage.getItem('UtilsState')
  ? JSON.parse(String(localStorage.getItem('UtilsState')))
  : STATE;

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
      localStorage.setItem('UtilsState', JSON.stringify(state));
    },
    changeSource: (state) => {
      state.isfirstSource = !state.isfirstSource;
      localStorage.setItem('UtilsState', JSON.stringify(state));
    },
  },
  extraReducers: {
    [fetchCity.fulfilled.type]: (state, action) => {
      state.city = action.payload.features[0].text;
      localStorage.setItem('UtilsState', JSON.stringify(state));
    },
  },
});

export default citySlice.reducer;
