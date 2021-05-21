import { combineReducers } from "redux";
import productReducer from "./reducers/product";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
})

export default rootReducer;
