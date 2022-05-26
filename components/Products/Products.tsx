import {FC} from "react";
import styles from "./Products.module.scss";
import Menu from "./Menu";
import ProductsList from "./ProductsList";

export const Products: FC = () => {
    return (
        <div className={styles.Products}>
            <div className={styles.Products__content}>
                <Menu />
                <ProductsList />
            </div>
        </div>
    )
}