import {FC} from "react";
import Dropdown from "@ui/Dropdown";
import DropdownItem from "@ui/Dropdown/DropdownItem";
import styles from "./LanguageDropdown.module.scss";

interface LanguageDropdown {
    open: boolean
}

export const LanguageDropdown: FC<LanguageDropdown> = (
    {
        open
    }
) => {
    return (
        <Dropdown className={styles.LanguageDropdown} open={open}>
            <DropdownItem icon={"/armenia-icon.svg"}>Armenian</DropdownItem>
            <DropdownItem icon={"/russia-icon.svg"}>Russian</DropdownItem>
        </Dropdown>
    )
}