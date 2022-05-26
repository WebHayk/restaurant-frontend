import {FC} from "react";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import {useMainSelector} from "@store/selectors";

export const Menu: FC = () => {

    let state = useMainSelector();

    return (
        <div className={styles.Menu}>
            <div className={styles.Menu__content}>
                <div className={styles.Menu__top}>
                    <p className={styles.Menu__title}>{state.static?.products.title}</p>
                    <p className={styles.Menu__description}>{state.static?.products.description}</p>
                </div>
                <ul className={styles.Menu__list}>
                    <MenuItem>Hot dishes</MenuItem>
                    <MenuItem>Drinks</MenuItem>
                </ul>
            </div>
        </div>
    )
}