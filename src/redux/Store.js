import {createStore} from "redux";
import CartReducer from "./Cart/CartReducer";

const Store = createStore(CartReducer);

export default Store;
