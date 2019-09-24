import { combineReducers } from "redux";
import graphReducer from "./graphReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  graph: graphReducer,
  user: userReducer
});

export default rootReducer;
