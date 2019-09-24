import { combineReducers } from "redux";
import expensesReducer from "./expensesReducer";
import graphReducer from "./graphReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  expenses: expensesReducer,
  graph: graphReducer
});

export default rootReducer;
