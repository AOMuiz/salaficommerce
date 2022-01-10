import { combineReducers } from "redux";
import addCart from "../../state/reducers/addCart";
import deleteCart from "../../state/reducers/deleteCart";
import { productReducer, selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  add: addCart,
  delete: deleteCart,
});

export default rootReducer;
