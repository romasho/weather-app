import { combineReducers, configureStore } from "@reduxjs/toolkit";
import citySlice from "./reducers/citySlice";
import weatherSlice from "./reducers/weatherSlice";

const rootReducer = combineReducers({
  citySlice,
  weatherSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
