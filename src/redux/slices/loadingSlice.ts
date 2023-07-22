import { createSlice } from '@reduxjs/toolkit';

export interface loadingSliceState{
  isLoaded: boolean;
}

const initialState: loadingSliceState = {
  isLoaded: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoaded(state) {
      state.isLoaded = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoaded } = loadingSlice.actions;

export default loadingSlice.reducer;
