import axios from "axios";
import { BEERS_LOADING, GET_BEERS } from "./types";

// Beers loading
export const setBeersLoading = () => {
  return {
    type: BEERS_LOADING
  };
};

export const getBeers = () => {
  return async dispatch => {
    try {
      const data = await axios.get("http://ontariobeerapi.ca/products/");
      dispatch({
        type: GET_BEERS,
        payload: data
      });
    } catch {
      dispatch({
        type: GET_BEERS,
        payload: null
      });
    }
  };
};
