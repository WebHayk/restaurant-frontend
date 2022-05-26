import {FC} from "react";
import styles from "./About.module.scss";
import Button from "@ui/Button";
import {useRouter} from "next/router";
import {useMainSelector} from "@store/selectors";

export const About: FC = () => {

    let router = useRouter();
    let state = useMainSelector();

    const handleRedirect = () => router.push("/about");

    return (
        <div className={styles.About}>
            <div className={styles.About__content}>
                <div className={styles.About__left}>
                    <h1 className={styles.About__title}>{state.static?.home.about.title}</h1>
                    <h2 className={styles.About__description}>{state.static?.home.about.content}</h2>
                    <Button
                        onClick={handleRedirect}
                        color={"black"}
                        variant={"small"}
                        type={"button"}
                    >
                        {state.static?.home.about.action}
                    </Button>
                </div>
                <div className={styles.About__right}>
                    <img
                        src={"/about-image.jpg"}
                        alt={"about-image"}
                        width={500}
                        height={300}
                        loading={"lazy"}
                    />
                </div>
            </div>
        </div>
    )
}