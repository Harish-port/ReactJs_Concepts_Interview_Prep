import { ActionTypes } from "../Constants/action-types";

const initialState = {
  count: 0,
  error: "",
};

const counterReducer = (state = initialState, { type }) => {
  console.log(state, "<><");
  switch (type) {
    case ActionTypes.INCREMENT: {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "MAx" : null,
      };
    }
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ActionTypes.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
export default counterReducer;
