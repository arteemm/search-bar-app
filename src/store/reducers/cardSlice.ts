import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCard } from './actionCreators';
import { ResponseCard } from '../../types';

interface StateTypeCard {
  card: ResponseCard;
  loading: boolean;
  error: { message: string; code: string } | null;
  searchValue: string;
  options: string;
}

const initialState: StateTypeCard = {
  card: {} as ResponseCard,
  loading: false,
  error: null,
  searchValue: 'summer',
  options: '',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSearchWord: (state: StateTypeCard, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setPerPageCards: (state: StateTypeCard, action: PayloadAction<number>) => {
      state.card.photos.perpage = action.payload;
    },
    incrementPage: (state: StateTypeCard) => {
      state.card.photos.page--;
    },
    decrementPage: (state: StateTypeCard) => {
      state.card.photos.page++;
    },
  },
  extraReducers: {
    [fetchCard.pending.type]: (state) => {
      state.error = null;
    },
    [fetchCard.fulfilled.type]: (state: StateTypeCard, action: PayloadAction<ResponseCard>) => {
      state.loading = false;
      state.card = action.payload;
    },
    [fetchCard.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.card = {} as ResponseCard;
    },
  },
});

export default cardSlice.reducer;
