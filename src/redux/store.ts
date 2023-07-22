import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import loadingSlice from './slices/loadingSlice';
import { useDispatch} from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux'


export const store = configureStore({
  reducer: {
    cartSlice,
    loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


