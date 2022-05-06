import {FC, ReactChild} from "react";
import styles from "./Button.module.scss";
import cs from "classnames";

interface Button {
    children: ReactChild,
    onClick: () => any,
    color: "black" | "green",
    variant: "large" | "small",
    type: "submit" | "button" | "reset"
}

export const Button: FC<Button> = (
    {
        children,
        onClick,
        color,
        variant,
        type
    }
) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cs({
                [styles.Button]: true,
                [styles.Button__black]: color == "black",
                [styles.Button__green]: color == "green",
                [styles.Button__large]: variant == "large",
                [styles.Button__small]: variant == "small"
            })}
        >
            {children}
        </button>
    )
}