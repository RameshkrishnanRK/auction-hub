import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice.reducer;