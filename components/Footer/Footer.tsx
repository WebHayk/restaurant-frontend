import {FC} from "react";
import styles from "./Footer.module.scss";
import ContactItem from "@components/Footer/ContactItem";

export const Footer: FC = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__content}>
                <div className={styles.Footer__left}>
                    <p className={styles.Footer__copyright}>© COMPANY LLC 2022: All rights reserved</p>
                </div>
                <div className={styles.Footer__right}>
                    <p className={styles.Footer__text}>Contact with us</p>
                    <div className={styles.Footer__contacts}>
                        <ContactItem href={"/"} icon={"/gmail-icon.svg"} />
                        <ContactItem href={"/"} icon={"/telegram-icon.svg"} />
                        <ContactItem href={"/"} icon={"/youtube-icon.svg"} />
                        <ContactItem href={"/"} icon={"/facebook-icon.svg"} />
                    </div>
                </div>
            </div>
        </div>
    )
}