import { combineReducers } from "redux";
import productReducer from "../slices/productSlice";
import sideBarReducer from "../slices/sideBarCategorySlice";
import contactReducer from "../slices/contactSlice";
import sideBarRegionReducer from "../slices/sideBarRegionSlice";
import loginReducer from "../slices/loginSlice";
import registerReducer from "../slices/registerSlice";
import currencyReducer from "../slices/currencySlice";
import roleReducer from '../slices/roleSlice';

const rootReducer = combineReducers({
  product: productReducer,
  sidebar: sideBarReducer,
  contact: contactReducer,
  sideBarRegion: sideBarRegionReducer,
  login: loginReducer,
  register: registerReducer,
  currency: currencyReducer,
  roles: roleReducer,
});

export default rootReducer;
