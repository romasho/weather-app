import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CityState {
  city: string;
}

const initialState: CityState = {
  city: "",
};

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
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [fetchCity.pending.type]: (state) => {
      console.log("pending city");
    },
    [fetchCity.fulfilled.type]: (state, action) => {
      console.log("fulfilled city");
      state.city = action.payload.features[0].text;
    },
    [fetchCity.rejected.type]: (state) => {
      console.log("rejected city");
    },
  },
});

export default citySlice.reducer;
