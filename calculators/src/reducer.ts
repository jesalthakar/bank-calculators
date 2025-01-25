
import { INITIALS } from "./ActionTypes";
import { initialState } from "./store";

interface actionType {
    type: typeof INITIALS;
    payload: { initialName: string };
}

export const nameInitialReducer = (state = initialState, action: actionType) => {
    console.log(action)
    switch (action.type) {
        case INITIALS:
            console.log("initials")
            return {
                ...state,
                initialName: action.payload.initialName
            }
        default:
            return state;
    }
}