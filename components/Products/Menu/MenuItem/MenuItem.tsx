import {FC, ReactChild} from "react";
import styles from "./MenuItem.module.scss";

interface MenuItem {
    children: ReactChild
}

export const MenuItem: FC<MenuItem> = (
    {
        children
    }
) => {
    return (
        <li className={styles.MenuItem}>
            <span className={styles.MenuItem__content}>{children}</span>
        </li>
    )
}