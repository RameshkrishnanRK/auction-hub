import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../features/Dashboard/Browse/data";

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts: (state) => {
            state.products = products;
        }
    }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
