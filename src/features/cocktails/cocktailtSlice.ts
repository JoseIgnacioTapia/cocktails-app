import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  CaseReducer,
} from '@reduxjs/toolkit';

import { transformCocktail } from '../../utils/helpers';

export interface Cocktail {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
  category?: string;
  instructions?: string;
  ingredients?: string[];
}

interface CocktailState {
  cocktails: Cocktail[];
  searchTerm: string;
  loading: boolean;
  error: Error | null;
}

const initialState: CocktailState = {
  cocktails: [],
  searchTerm: 'a',
  loading: false,
  error: null,
};

const url: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// Search by term
export const searchByTerm = createAsyncThunk(
  'cocktails/searchByTerm',
  async (term: string = initialState.searchTerm) => {
    try {
      const response = await fetch(`${url}${term}`);
      const data = await response.json();

      const transformedData = data.drinks
        ? data.drinks.map((cocktail: any) => transformCocktail(cocktail))
        : initialState.cocktails;

      return transformedData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const searchByTermRejectedReducer: CaseReducer<
  CocktailState,
  PayloadAction<Error | null>
> = state => {
  state.loading = false;
  state.error = new Error('Cocktail does not found');
};

export const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    setSearchTerm: (state: CocktailState, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchByTerm.pending, (state: CocktailState) => {
        state.loading = true;
      })
      .addCase(
        searchByTerm.fulfilled,
        (state: CocktailState, action: PayloadAction<Cocktail[]>) => {
          state.loading = false;
          state.cocktails = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        searchByTermRejectedReducer
      );
  },
});

export default cocktailSlice.reducer;
