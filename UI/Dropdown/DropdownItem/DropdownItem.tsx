import {FC, ReactChild} from "react";
import styles from "./DropdownItem.module.scss";
import Image from "next/image";
import cs from "classnames";

interface DropdownItem {
    icon?: string,
    children: ReactChild,
    onClick: any
}

export const DropdownItem: FC<DropdownItem> = (
    {
        icon,
        children,
        onClick
    }
) => {
    return (
        <li onClick={onClick} className={styles.DropdownItem}>
            {
                icon?.length
                ?
                <Image
                  src={icon}
                  alt={"dropdown-item"}
                  width={20}
                  height={20}
                />
                :
                null
            }
            <span className={cs({
                [styles.DropdownItem__renderer]: icon?.length
            })}>{children}</span>
        </li>
    )
}