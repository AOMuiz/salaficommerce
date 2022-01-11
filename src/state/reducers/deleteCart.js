import React from "react";

const deleteCart = (state = 0, action) => {
  switch (action.type) {
    case "DELETE":
      return state - 1;
    default:
      return state;
  }
};

export default deleteCart;
