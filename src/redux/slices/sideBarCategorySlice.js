import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../jsonData";

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: false
};

const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        data: [],
        loading: false,
        error: null,
        success: false
    },
    reducers: {
        fetchSideBarStart: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false
        },
        fetchSideBarSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.success = true
        },
        fetchSideBarFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false
        },

       
    }
});

export const { fetchSideBarStart, fetchSideBarSuccess, fetchSideBarFailure } = sideBarSlice.actions;
export default sideBarSlice.reducer;
