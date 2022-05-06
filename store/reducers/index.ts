import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import {HYDRATE} from 'next-redux-wrapper';
import {ActionType} from "../../types/interfaces/interfaces";

export const rootReducer = combineReducers({
    main: mainReducer
});

export const parentReducer = (state: any, action: ActionType) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};