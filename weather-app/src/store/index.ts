import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import citySlice from './reducers/citySlice';
import tasksSlice from './reducers/taskSlice';
import weatherSlice from './reducers/weatherSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  citySlice,
  weatherSlice,
  tasksSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
