import { combineReducers } from "redux";
import productReducer from "../slices/productSlice";
import sideBarReducer from "../slices/sideBarCategorySlice";
import contactReducer from "../slices/contactSlice";
import sideBarRegionReducer from "../slices/sideBarRegionSlice";
import loginReducer from "../slices/loginSlice";
import registerReducer from "../slices/registerSlice";

const rootReducer = combineReducers({
  product: productReducer,
  sidebar: sideBarReducer,
  contact: contactReducer,
  sideBarRegion: sideBarRegionReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
