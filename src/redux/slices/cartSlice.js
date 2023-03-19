import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDrawer: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOpenDrawer(state, action) {
      state.openDrawer = !state.openDrawer;
    },
    closeDrawer(state, action) {
      state.openDrawer = false;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    onRemove(state, action) {
      state.cart = state.cart.filter((obj) => obj.id !== action.payload);
    },
    onAdd(state, action) {
      state.cart.push({ ...action.payload });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenDrawer, closeDrawer, setCart, onRemove, onAdd } = cartSlice.actions;

export default cartSlice.reducer;
