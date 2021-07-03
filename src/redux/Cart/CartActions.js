import {ADD_PROD} from "./CartActionTypes";

export const addprod = text => {
  console.log(text);
  return {
    type: ADD_PROD,
    payload: text,
  };
};
