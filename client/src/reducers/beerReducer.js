import { GET_BEERS } from "../actions/types";

const initialState = {
  beers: null,
  brewers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        beers: action.payload,
        brewers: [...new Set(action.payload.map(beer => beer.brewer))]
      };
    default:
      return state;
  }
}
