import {Dispatch, SetStateAction} from "react";

export interface ActionType {
    type: string,
    payload?: any
}

export interface NavbarComponentType {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    handleOpen: () => void,
    contactActionHandler: () => void
}
