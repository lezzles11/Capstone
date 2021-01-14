import { combineReducers } from "redux";
import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import featureReducer from "./featureReducer";

export default combineReducers({
  users: userReducer,
  features: featureReducer,
  projects: projectReducer,
});
