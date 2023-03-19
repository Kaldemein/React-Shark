import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import loadingSlice from './slices/loadingSlice';

const store = configureStore({
  reducer: {
    cartSlice,
    loadingSlice,
  },
});
export default store;
