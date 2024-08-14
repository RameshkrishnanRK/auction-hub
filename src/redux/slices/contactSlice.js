import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../jsonData";

const initialState = {
    data: [],
    loading: false,
    error: null,
    success: false
};

const contactSlice = createSlice({
    name: 'contact',
    initialState: initialState,
    reducers: {
        submitContactStart: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false
        },
        submitContactSuccess: (state) => {
            state.loading = false;
            state.success = true
        },
        submitContactFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false
        },
        setContactInfo: (state, action) => {
            state.data = {...state.data, ...action.payload}
        }
    }
});

export const { submitContactStart, submitContactSuccess, submitContactFailure, setContactInfo } = contactSlice.actions;
export default contactSlice.reducer;
