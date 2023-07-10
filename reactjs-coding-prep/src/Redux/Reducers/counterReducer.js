import { ActionTypes } from "../Constants/action-types";

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, { type }) => {
    console.log(state, "<><");
    switch (type) {
        case ActionTypes.INCREMENT:
            return { ...state, count: state.count + 1 };
        case ActionTypes.DECREMENT:
            return { ...state, count: state.count - 1 };
        case ActionTypes.RESET:
            return { ...state, count: 0 };
        default:
            return state;
    }
}
export default counterReducer;