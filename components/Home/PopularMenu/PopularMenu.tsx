import {FC} from "react";
import styles from "./PopularMenu.module.scss";
import Card from "@ui/Card";
import Button from "@ui/Button";
import {useRouter} from "next/router";
import {useMainSelector} from "@store/selectors";

export const PopularMenu: FC = () => {

    let router = useRouter();
    let state = useMainSelector();

    const handleMoreRedirect = () => router.push("/products");

    const handleProductRedirect = () => router.push("/products/8");

    return (
        <div className={styles.PopularMenu}>
            <div className={styles.PopularMenu__top}>
                <h1 className={styles.PopularMenu__title}>{state.static?.home.popular.title}</h1>
                <h2 className={styles.PopularMenu__description}>{state.static?.home.popular.description}</h2>
            </div>
            <div className={styles.PopularMenu__list}>
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.Card__renderer]}
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar"}
                    price={"1500 AMD"}
                />
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.Card__renderer]}
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar"}
                    price={"1500 AMD"}
                />
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.Card__renderer]}
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar"}
                    price={"1500 AMD"}
                />
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.Card__renderer]}
                    image={"/product-image.jpg"}
                    name={"Salad “Caesar"}
                    price={"1500 AMD"}
                />
            </div>
            <div className={styles.PopularMenu__more}>
                <Button
                    onClick={handleMoreRedirect}
                    color={"black"}
                    variant={"large"}
                    type={"button"}
                >
                    {state.static?.home.popular.action}
                </Button>
            </div>
        </div>
    )
}