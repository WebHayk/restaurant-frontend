import {FC} from "react";
import styles from "./OtherProducts.module.scss";
import Card from "@ui/Card";

export const OtherProducts: FC = () => {
    return (
        <div className={styles.OtherProducts}>
            <p className={styles.OtherProducts__title}>Other products</p>
            <div className={styles.OtherProducts__content}>
                <Card
                    classes={[styles.OtherProducts__product]}
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar”"}
                    price={"1500 AMD"}
                />
                <Card
                    classes={[styles.OtherProducts__product]}
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar”"}
                    price={"1500 AMD"}
                />
                <Card
                    classes={[styles.OtherProducts__product]}
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar”"}
                    price={"1500 AMD"}
                />
                <Card
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar”"}
                    price={"1500 AMD"}
                />
            </div>
        </div>
    )
}