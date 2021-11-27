import { ActionTypes } from "../constants/action-types";
import initialState from "../constants/state";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //INSIDE HOME/PRODUCT LIST COMPONENT
    case ActionTypes.ADD_TO_CART:
      let addedItem = state.products.find((item) => item.id === action.id);
      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    case ActionTypes.REMOVE_ITEM:
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let new_items = state.addedItems.filter((item) => action.id !== item.id);
      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    //INSIDE CART COMPONENT
    case ActionTypes.INCREASE_QUANTITY:
      addedItem = state.products.find((item) => item.id === action.id);
      addedItem.quantity += 1;
      newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    case ActionTypes.DECREASE_QUANTITY:
      addedItem = state.products.find((item) => item.id === action.id);
      //if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          total: newTotal,
        };
      }

    default:
      return state;
  }
};

// const cartReducer = (state = initialState, action) => {

//   if (action.type === ADD_SHIPPING) {
//     return {
//       ...state,
//       total: state.total + 6,
//     };
//   }

//   if (action.type === "SUB_SHIPPING") {
//     return {
//       ...state,
//       total: state.total - 6,
//     };
//   } else {
//     return state;
//   }
// };

export default cartReducer;
