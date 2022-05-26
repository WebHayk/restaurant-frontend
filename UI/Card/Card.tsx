import {FC} from "react";
import styles from "./Card.module.scss";
import cs from "classnames";

interface Card {
    image: string,
    name: string,
    price: string,
    classes?: any,
    onClick: () => void
}

export const Card: FC<Card> = (
    {
        image,
        name,
        price,
        classes,
        onClick
    }
) => {
    return (
        <div className={
            cs({
                [styles.Card]: true,
                [classes?.join(" ")]: classes?.length
            })
        }
        onClick={onClick}
        >
            <img
                loading={"lazy"}
                src={image}
                alt={"card-image"}
                width={270}
                height={196}
            />
            <div className={styles.Card__info}>
                <p className={styles.Card__title}>{name}</p>
                <p className={styles.Card__price}>{price}</p>
            </div>
        </div>
    )
}