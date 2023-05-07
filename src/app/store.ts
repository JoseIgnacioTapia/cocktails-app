import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cocktailsReducer from '../features/cocktails/cocktailtSlice';

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
});
