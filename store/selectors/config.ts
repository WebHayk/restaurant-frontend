import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "@typescript/types/types";

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;