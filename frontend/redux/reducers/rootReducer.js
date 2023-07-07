import { combineReducers } from "redux";
import { conditionsReducer } from "./conditionsReducer";

export const rootReducer = combineReducers({
  conditions: conditionsReducer,
});
