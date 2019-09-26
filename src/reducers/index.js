import { combineReducers } from "redux";
import graphReducer from "./graphs/graphReducer";
import userReducer from "./auth/userReducer";

const rootReducer = combineReducers({
  graph: graphReducer,
  user: userReducer
});

export default rootReducer;
