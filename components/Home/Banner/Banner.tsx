import {FC} from "react";
import styles from "./Banner.module.scss";
import Button from "@ui/Button";
import {useRouter} from "next/router";

export const Banner: FC = () => {

    let router = useRouter();

    const handleRedirect = () => router.push("/menu");

    return (
        <div className={styles.Banner}>
            <div className={styles.Banner__content}>
                <h1 className={styles.Banner__title}>Try delicious and healthy dishes in our restaurant</h1>
                <h3 className={styles.Banner__description}>Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future</h3>
                <div className={styles.Banner__action}>
                    <Button
                        onClick={handleRedirect}
                        color={"green"}
                        variant={"large"}
                        type={"button"}
                    >
                        View menu
                    </Button>
                </div>
            </div>
        </div>
    )
}