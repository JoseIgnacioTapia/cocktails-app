import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
});

export default cocktailSlice.reducer;
