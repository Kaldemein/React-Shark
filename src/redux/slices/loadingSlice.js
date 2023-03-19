import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoaded(state, action) {
      state.isLoaded = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoaded } = loadingSlice.actions;

export default loadingSlice.reducer;
