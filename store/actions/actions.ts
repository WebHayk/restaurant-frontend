import {DispatchType} from "@typescript/types/types";
import {SET_LANGUAGE, SET_STATIC_DATA} from "@store/actions/actionsTypes";
import {StaticDataType} from "@typescript/interfaces/interfaces";

export const setLanguageAction = (data: string) => {
    return (dispatch: DispatchType) => {
        localStorage.setItem("language", data);
        dispatch({type: SET_LANGUAGE, payload: data});
    }
}

export const setStaticDataAction = (data: StaticDataType) => {
    return (dispatch: DispatchType) => {
        dispatch({type: SET_STATIC_DATA, payload: data})
    }
}