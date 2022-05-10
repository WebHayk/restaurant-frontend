import {FC} from "react";
import styles from "./ContactItem.module.scss";
import Link from "next/link";

interface ContactItem {
    href: string,
    icon: string
}

export const ContactItem: FC<ContactItem> = (
    {
        href,
        icon
    }
) => {
    return (
        <div className={styles.ContactItem}>
            <Link href={href}>
                <img
                    src={icon}
                    alt={"contact-icon"}
                    width={32}
                    height={32}
                />
            </Link>
        </div>
    )
}