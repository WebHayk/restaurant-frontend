import {FC, ReactNode} from "react";
import styles from "./Dropdown.module.scss";
import cs from "classnames";

interface Dropdown {
    className: string,
    children: ReactNode,
    open: boolean
}

export const Dropdown: FC<Dropdown> = (
    {
        className,
        children,
        open
    }
) => {
    return (
        open
        ?
        <div className={cs({
            [className]: className
        })}>
            <ul className={styles.Dropdown__list}>
                {children}
            </ul>
        </div>
        :
        null
    )
}