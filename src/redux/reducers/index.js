import { combineReducers } from "redux";
import productReducer from "../slices/productSlice";
import sideBarReducer from "../slices/sideBarSlice";
import contactReducer from "../slices/contactSlice";
import sideBarRegionReducer from "../slices/sideBarRegionSlice";
import loginReducer from "../slices/loginSlice";

const rootReducer = combineReducers({
    product: productReducer,
    sidebar: sideBarReducer,
    contact: contactReducer,
    sideBarRegion: sideBarRegionReducer,
    login: loginReducer
});

export default rootReducer;