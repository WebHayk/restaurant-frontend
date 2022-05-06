import {ActionType} from "@typescript/interfaces/interfaces";

const initialState = {
    loading: false
};

export const mainReducer = (state = initialState, action: ActionType) => {
    switch(action.type) {

        default:
            return state
    }
}