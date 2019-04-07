import { combineReducers } from "redux";
import beerReducer from "./beerReducer";
import optionReducer from "./optionReducer";

export default combineReducers({
  beer: beerReducer,
  options: optionReducer
});
