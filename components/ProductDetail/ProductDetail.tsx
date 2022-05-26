import {FC} from "react";
import styles from "./ProductDetail.module.scss";

export const ProductDetail: FC = () => {
    return (
        <div className={styles.Product}>
            <div className={styles.Product__content}>
                <div className={styles.Product__top}>
                    <div className={styles.Product__left}>
                        <img
                            className={styles.Product__image}
                            src={"/product-image.jpg"}
                            alt={"product-image"}
                            width={450}
                            height={300}
                        />
                    </div>
                    <div className={styles.Product__right}>
                        <p className={styles.Product__title}>Salad “Caesar”</p>
                        <p className={styles.Product__description}>
                            Our restaurant is dedicated to the safety of its customers and staff. We are following closely with the government's rules, regulations and advices in keeping the restaurant and environment safe and healthy. We feel a strong responsibility that the show must go on. Throughout our day we are constantly wiping down surfaces in between tasks with disinfectant cleaners. These food safe disinfectant cleaners ensure that all food surfaces are kept clean and germ free. In addition to all of our surfaces being wiped down.
                        </p>
                        <p className={styles.Product__price}>1500 AMD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}