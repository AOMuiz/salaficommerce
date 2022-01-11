import addReducer from "./addCart";
import deleteReducer from "./deleteCart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  add: addReducer,
  delete: deleteReducer,
});

export default allReducers;
