import { CHANGE_OPTIONS } from "./types";

export const changeOptions = options => {
  return {
    type: CHANGE_OPTIONS,
    payload: options
  };
};
