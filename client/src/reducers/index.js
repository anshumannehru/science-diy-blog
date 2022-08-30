/*Register all the reducers*/
import { combineReducers } from "redux";
import auth from "./auth";

export default combineReducers({
    auth
})