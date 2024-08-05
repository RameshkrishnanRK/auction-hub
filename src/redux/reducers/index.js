import { combineReducers } from "redux";
import productReducer from "./productReducer1";

const rootReducer = combineReducers({
    products: productReducer,
});

export default rootReducer;