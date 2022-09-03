/*Create the redeucers for the activity page*/
import { GET_CURRENT_ACTIVITY } from "../actions/types";
const initialState = {
  activity: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_ACTIVITY:
      return {
        ...state,
        activity: payload,
        loading: false,
      };
    default:
      return state;
  }
}
