import {FC} from "react";
import styles from "./Footer.module.scss";
import ContactItem from "@components/Footer/ContactItem";
import {useMainSelector} from "@store/selectors";

export const Footer: FC = () => {

    let state = useMainSelector();

    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__content}>
                <div className={styles.Footer__left}>
                    <p className={styles.Footer__copyright}>{state.static?.footer.copyright}</p>
                </div>
                <div className={styles.Footer__right}>
                    <p className={styles.Footer__text}>{state.static?.footer.contact}</p>
                    <div className={styles.Footer__contacts}>
                        <ContactItem
                            href={"/"}
                            icon={"/gmail-icon.svg"}
                        />
                        <ContactItem
                            href={"/"}
                            icon={"/telegram-icon.svg"}
                        />
                        <ContactItem
                            href={"/"}
                            icon={"/youtube-icon.svg"}
                        />
                        <ContactItem
                            href={"/"}
                            icon={"/facebook-icon.svg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}