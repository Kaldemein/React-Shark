import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDrawer: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { setOpenDrawer, closeDrawer } = cartSlice.actions;

export default cartSlice.reducer;
