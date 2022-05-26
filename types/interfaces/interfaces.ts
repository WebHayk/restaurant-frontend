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

export interface StaticDataType {
    navbar: {
        list: {
            home: string,
            menu: string,
            about: string
        },
        languages: {
            hy: string,
            en: string,
            ru: string
        },
        contact: string,
        search: string
    },
    home: {
        banner: {
            title: string,
            description: string,
            action: string
        },
        popular: {
            title: string,
            description: string,
            action: string
        },
        about: {
            title: string,
            content: string,
            action: string
        }
    },
    products: {
        title: string,
        description: string
    },
    footer: {
        copyright: string,
        contact: string
    }
}