// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
