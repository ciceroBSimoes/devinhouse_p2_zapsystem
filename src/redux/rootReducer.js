import { combineReducers } from "redux";
import selectReducer from "./Select/select-reducer";

const rootReducer = combineReducers({
  select: selectReducer,
});

export default rootReducer;
