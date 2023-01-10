import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cardReducer from './reducers/cardSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
  middleware: () => customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
