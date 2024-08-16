import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../jsonData";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = loginSlice.actions;
export default loginSlice.reducer;
