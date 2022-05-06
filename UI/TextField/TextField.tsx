import React, {FC} from "react";
import Image from "next/image";
import styles from "./TextField.module.scss";

interface TextField {
    type: "text" | "password",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    value: string,
    placeholder: string,
    icon?: string
}

export const TextField: FC<TextField> = (
    {
        name,
        type,
        onChange,
        value,
        placeholder,
        icon
    }
) => {
    return (
        <div className={styles.FieldWrapper}>
            {
                icon?.length
                ?
                <Image
                    src={icon}
                    alt={"input-icon"}
                    width={25}
                    height={25}
                />
                :
                null
            }
            <input
                className={styles.FieldWrapper__field}
                type={type}
                onChange={onChange}
                name={name}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}