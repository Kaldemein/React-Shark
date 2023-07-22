import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type cartItem = {
  category: string;
  color: string;
  id: string;
  imageUR: string;
  isNew: boolean;
  price: number;
  size:  string;
  title: string;
  type: string;
}

interface cartSliceState{
  openDrawer: boolean;
  cart: cartItem[];
  totalPrice: number;
  activeSize: number | null;
}

const initialState: cartSliceState = {
  openDrawer: false,
  cart: [],
  totalPrice: 0,
  activeSize: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOpenDrawer(state) {
      state.openDrawer = !state.openDrawer;
    },
    closeDrawer(state) {
      state.openDrawer = false;
    },
    setCart(state, action: PayloadAction<cartItem[]>) {
      state.cart = action.payload;
    },
    onRemove(state, action: PayloadAction<string>) {
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
