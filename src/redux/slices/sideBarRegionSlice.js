import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../features/Dashboard/Browse/data";

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: false
};

const sideBarRegionSlice = createSlice({
    name: 'sideBarRegion',
    initialState: {
        data: [],
        loading: false,
        error: null,
        success: false
    },
    reducers: {
        fetchSideBarRegionsStart: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false
        },
        fetchSideBarRegionsSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.success = true
        },
        fetchSideBarRegionsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false
        },
    }
});

export const { fetchSideBarRegionsStart, fetchSideBarRegionsSuccess, fetchSideBarRegionsFailure } = sideBarRegionSlice.actions;
export default sideBarRegionSlice.reducer;
