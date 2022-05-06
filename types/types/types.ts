import {rootReducer} from "@store/reducers";
import {ActionType, NavbarComponentType} from "@typescript/interfaces/interfaces";

export type RootStateType = ReturnType<typeof rootReducer>;
export type DispatchType = (newState: ActionType) => void;
export type NavbarContextType = NavbarComponentType | {};