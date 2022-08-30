/*All auth functions will be handeled here only*/
import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";

/*loading user on first load*/

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    /*get the user token for the following*/
    const res = await axios.get("http://localhost:5000/api/auth");
    console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

/*Login the admin to the admin login page*/
export const login = (adminEmail, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formData = JSON.stringify({ adminEmail, password });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth",
      formData,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

/*Logout from the page*/
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
