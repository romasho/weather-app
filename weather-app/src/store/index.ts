import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { openWeatherApi } from '../services';
import citySlice from './reducers/citySlice';
import tasksSlice from './reducers/taskSlice';
import weatherSlice from './reducers/weatherSlice';

const rootReducer = combineReducers({
  citySlice,
  weatherSlice,
  tasksSlice,
  [openWeatherApi.reducerPath]: openWeatherApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openWeatherApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
