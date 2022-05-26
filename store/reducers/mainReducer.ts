import {ActionType} from "@typescript/interfaces/interfaces";
import {MainReducerType} from "@typescript/interfaces/reducers/MainReducerType";
import {
    SET_LANGUAGE,
    SET_STATIC_DATA
} from "@store/actions/actionsTypes";

const initialState: MainReducerType = {
    language: typeof window !== "undefined" ? localStorage.getItem("language") as string : "en",
    static: null
};

export const mainReducer = (state = initialState, action: ActionType) => {

    let data = action.payload;

    switch(action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: data
            }
        case SET_STATIC_DATA:
            return {
                ...state,
                static: data
            }
        default:
            return state
    }
}