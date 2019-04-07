import axios from "axios";
import { GET_BEERS } from "./types";

export const getBeers = () => {
  return async dispatch => {
    try {
      const beers = await axios.get("/products");
      dispatch({
        type: GET_BEERS,
        payload: beers.data
      });
    } catch {
      dispatch({
        type: GET_BEERS,
        payload: null
      });
    }
  };
};
