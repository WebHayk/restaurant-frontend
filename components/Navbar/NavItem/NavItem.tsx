import {FC, ReactChild} from "react";
import styles from "./NavItem.module.scss";
import Link from "next/link";

interface NavItem {
    href: string,
    children: ReactChild,
    icon: string
}

export const NavItem: FC<NavItem> = (
    {
        href,
        children,
        icon
    }
) => {
    return (
       <li className={styles.NavItem}>
          <Link href={href}>
              <div className={styles.NavItem__renderer}>
                <img
                    loading={"lazy"}
                    className={styles.NavItem__icon}
                    src={icon}
                    alt={"home-icon"}
                    width={25}
                    height={25}
                />
                <span className={styles.NavItem__link}>{children}</span>
              </div>
          </Link>
       </li>
    )
}