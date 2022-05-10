import {FC} from "react";
import styles from "./About.module.scss";
import Button from "@ui/Button";
import {useRouter} from "next/router";

export const About: FC = () => {

    let router = useRouter();

    const handleRedirect = () => router.push("/about");

    return (
        <div className={styles.About}>
            <div className={styles.About__content}>
                <div className={styles.About__left}>
                    <h1 className={styles.About__title}>About us</h1>
                    <h2 className={styles.About__description}>
                        Our restaurant is dedicated to the safety of its customers and staff. We are following closely with the government's rules, regulations and advices in keeping the restaurant and environment safe and healthy. We feel a strong responsibility that the show must go on. Throughout our day we are constantly wiping down surfaces in between tasks with disinfectant cleaners. These food safe disinfectant cleaners ensure that all food surfaces are kept clean and germ free. In addition to all of our surfaces being wiped down.
                    </h2>
                    <Button
                        onClick={handleRedirect}
                        color={"black"}
                        variant={"small"}
                        type={"button"}
                    >
                        Learn more
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