import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { openWeatherApi, stormGlassApi } from "../services";
import citySlice from "./reducers/citySlice";
import weatherSlice from "./reducers/weatherSlice";

const rootReducer = combineReducers({
  citySlice,
  weatherSlice,
  [stormGlassApi.reducerPath]: stormGlassApi.reducer,
  [openWeatherApi.reducerPath]: openWeatherApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(stormGlassApi.middleware)
        .concat(openWeatherApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
