import { products } from "../../features/Dashboard/Browse/data";
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}