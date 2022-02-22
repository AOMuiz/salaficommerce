import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { productReducer, selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
});

export default rootReducer;
