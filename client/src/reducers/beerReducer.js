import { BEERS_LOADING, GET_BEERS } from "../actions/types";

const initialState = {
  beers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BEERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_BEERS:
      return {
        ...state,
        beers: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
