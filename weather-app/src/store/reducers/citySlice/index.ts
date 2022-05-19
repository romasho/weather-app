import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CityState {
  city: string;
}

const state: CityState = {
  city: "",
};

const initialState: CityState = localStorage.getItem("CityState")
  ? JSON.parse(String(localStorage.getItem("CityState")))
  : state;

export const fetchCity = createAsyncThunk(
  "city/fetchCard",
  async (src: string, thynkAPI) => {
    const res = await fetch(src).then((data) => data.json());
    return res;
  }
);

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      localStorage.setItem("CityState", JSON.stringify(state))
    },
  },
  extraReducers: {
    [fetchCity.fulfilled.type]: (state, action) => {
      state.city = action.payload.features[0].text;
    },
  },
});

export default citySlice.reducer;
