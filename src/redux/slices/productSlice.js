import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    fetchProductsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.success = true;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;
export default productSlice.reducer;
