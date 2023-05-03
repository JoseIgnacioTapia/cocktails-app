import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cocktailsReducer from '../features/cocktails/cocktailtSlice';

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
