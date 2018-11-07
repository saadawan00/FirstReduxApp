import { combineReducers } from "redux";
import postReducers from "./postReducers.js";
//import as many reducers here

export default combineReducers({
  postsReducer: postReducers
});
