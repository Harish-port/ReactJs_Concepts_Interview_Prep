import { ActionTypes } from "../Constants/action-types";

export const incrementCounter = () => {
  return {
    type: ActionTypes.INCREMENT,
  };
};

export const decrementCounter = () => {
  return {
    type: ActionTypes.DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: ActionTypes.RESET,
  };
};
