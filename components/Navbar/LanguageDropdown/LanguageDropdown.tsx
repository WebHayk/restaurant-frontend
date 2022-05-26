import React, {FC} from "react";
import Dropdown from "@ui/Dropdown";
import DropdownItem from "@ui/Dropdown/DropdownItem";
import styles from "./LanguageDropdown.module.scss";
import useActions from "@hooks/useActions";
import {useMainSelector} from "@store/selectors";

interface LanguageDropdown {
    open: boolean,
    setOpen: React.Dispatch<boolean>
}

export const LanguageDropdown: FC<LanguageDropdown> = (
    {
        open,
        setOpen
    }
) => {

    let {setLanguageAction} = useActions();
    let state = useMainSelector();

    const setCurrentLanguage = (value: string) => {
        setLanguageAction(value);
        setOpen(false);
    };

    return (
        <Dropdown className={styles.LanguageDropdown} open={open}>
            {
                state.language == "en" || state.language == "ru"
                ?
                <DropdownItem
                    onClick={() => setCurrentLanguage("hy")}
                    icon={"/armenia-icon.svg"}
                >
                    Armenian
                </DropdownItem>
                :
                null
            }
            {
                state.language == "ru" || state.language == "hy"
                ?
                <DropdownItem
                    onClick={() => setCurrentLanguage("en")}
                    icon={"/usa-icon.svg"}
                >
                    English
                </DropdownItem>
                :
                null
            }
            {
                state.language == "hy" || state.language == "en"
                    ?
                    <DropdownItem
                        onClick={() => setCurrentLanguage("ru")}
                        icon={"/russia-icon.svg"}
                    >
                        Russian
                    </DropdownItem>
                    :
                    null
            }
        </Dropdown>
    )
}