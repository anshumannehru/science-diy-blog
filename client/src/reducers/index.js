/*Register all the reducers*/
import { combineReducers } from "redux";
import auth from "./auth";
import activityPage from "./activityPage";
export default combineReducers({
    auth,
    activityPage
})