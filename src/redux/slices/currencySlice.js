import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    currency: "$",
    currencyRates: {
    '$':1,
    '₹': 74.85,
    "€": 0.85,
    "¥": 110.12,
    },
};

const currencySlice = createSlice ({
    name: "currency",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
           
            state.currency = action.payload;
          
        },
    },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;