import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDrawer: false,
  cart: [],
  totalPrice: 0,
  activeSize: null,
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
      state.totalPrice = 0;
      state.cart.map((obj) => (state.totalPrice += obj.price));
    },
    onAdd(state, action) {
      state.cart.push({ ...action.payload });
      state.totalPrice = 0;
      state.cart.map((obj) => (state.totalPrice += obj.price));
    },
    onChooseSize(state, action) {
      state.activeSize = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenDrawer, closeDrawer, setCart, onRemove, onAdd, onChooseSize } =
  cartSlice.actions;

export default cartSlice.reducer;
