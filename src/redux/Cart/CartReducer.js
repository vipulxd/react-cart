import {ADD_PROD} from "./CartActionTypes";

const initialState = {
  productsincart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROD":
      return {
        ...state,
        productsincart: [...state.productsincart, action.payload],
      };

    default:
      return state;
  }
};
export default CartReducer;
