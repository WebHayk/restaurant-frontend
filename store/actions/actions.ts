import {DispatchType} from "@typescript/types/types";
import {SET_EXAMPLE} from "@store/actions/actionsTypes";

export const SET_EXAMPLE_ACTION = () => {
    return (dispatch: DispatchType) => {
        dispatch({type: SET_EXAMPLE});
    }
}