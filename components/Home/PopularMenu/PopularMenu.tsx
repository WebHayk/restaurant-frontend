import {FC} from "react";
import styles from "./PopularMenu.module.scss";
import Card from "@ui/Card";
import Button from "@ui/Button";
import {useRouter} from "next/router";

export const PopularMenu: FC = () => {

    let router = useRouter();

    const handleRedirect = () => router.push("/menu");

    return (
        <div className={styles.PopularMenu}>
            <div className={styles.PopularMenu__top}>
                <h1 className={styles.PopularMenu__title}>Our Popular Menu</h1>
                <h2 className={styles.PopularMenu__description}>Made with super ingredients</h2>
            </div>
            <div className={styles.PopularMenu__list}>
                <Card classes={[styles.Card__renderer]} image={"/product-image.jpg"} name={"Salad “Caesar"} price={"1500 AMD"} />
                <Card classes={[styles.Card__renderer]} image={"/product-image.jpg"} name={"Salad “Caesar"} price={"1500 AMD"} />
                <Card classes={[styles.Card__renderer]} image={"/product-image.jpg"} name={"Salad “Caesar"} price={"1500 AMD"} />
                <Card classes={[styles.Card__renderer]} image={"/product-image.jpg"} name={"Salad “Caesar"} price={"1500 AMD"} />
            </div>
            <div className={styles.PopularMenu__more}>
                <Button
                    onClick={handleRedirect}
                    color={"black"}
                    variant={"large"}
                    type={"button"}
                >
                    View more
                </Button>
            </div>
        </div>
    )
}