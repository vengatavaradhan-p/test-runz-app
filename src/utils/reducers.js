// reducers.js
import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
