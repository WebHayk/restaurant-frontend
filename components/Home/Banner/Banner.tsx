import {FC, useEffect} from "react";
import styles from "./Banner.module.scss";
import Button from "@ui/Button";
import {useRouter} from "next/router";
import {useMainSelector} from "@store/selectors";

export const Banner: FC = () => {

    let router = useRouter();
    let state = useMainSelector();

    const handleRedirect = () => router.push("/menu");

    return (
        <div className={styles.Banner}>
            <div className={styles.Banner__content}>
                <h1 className={styles.Banner__title}>{state.static?.home.banner.title}</h1>
                <h3 className={styles.Banner__description}>{state.static?.home.banner.description}</h3>
                <div className={styles.Banner__action}>
                    <Button
                        onClick={handleRedirect}
                        color={"green"}
                        variant={"large"}
                        type={"button"}
                    >
                        {state.static?.home.banner.action}
                    </Button>
                </div>
            </div>
        </div>
    )
}