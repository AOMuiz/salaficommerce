import { ActionTypes } from "../constants/action-types.js";

// import ADD_TO_CART from "../constants/action-types";
// import REMOVE_ITEM from "../constants/action-types";
// import DECREASE_QUANTITY from "../constants/action-types";
// import INCREASE_QUANTITY from "../constants/action-types";

//add cart action
export const addToCart = (id) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    id,
  };
};
