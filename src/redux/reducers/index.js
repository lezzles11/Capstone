import { combineReducers } from "redux";
import userReducer from "./userReducer";
import featureReducer from "./featureReducer";

export default combineReducers({
  users: userReducer,
  features: featureReducer,
});
