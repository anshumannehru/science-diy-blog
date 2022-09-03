/*Create actions for activity page*/
import axios from "axios";
import { GET_CURRENT_ACTIVITY } from "./types";

export const getCurrentActivity = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/activitypage/me");
    console.log(res.data);
    dispatch({
      type: GET_CURRENT_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
