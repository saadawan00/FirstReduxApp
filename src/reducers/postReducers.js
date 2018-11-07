import { FETCH_URL, NEW_URL } from "../actions/type.js";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_URL:
      return {
        ...state,
        items: action.payload
      };
    case NEW_URL:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
