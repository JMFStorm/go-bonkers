import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import placesReducer from "./placesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  places: placesReducer,
  user: userReducer,
});

export default rootReducer;
