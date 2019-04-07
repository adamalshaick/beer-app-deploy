import { CHANGE_OPTIONS } from "../actions/types";

const initialState = {
  options: {}
  // options: JSON.parse(localStorage.getItem("settings"))
  //   ? JSON.parse(localStorage.getItem("settings"))
  //   : {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_OPTIONS: {
      return {
        ...state,
        options: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
