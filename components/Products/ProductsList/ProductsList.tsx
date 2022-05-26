import React, {FC, useState} from "react";
import styles from "./ProductsList.module.scss";
import Card from "@ui/Card";
import {useRouter} from "next/router";

export const ProductsList: FC = () => {

    let router = useRouter();

    const handleProductRedirect = () => router.push("/products/8");

    return (
        <div className={styles.ProductsList}>
            <div className={styles.ProductsList__content}>
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.ProductsList__renderer]}
                    image={"/product-image.jpg"}
                    name={"Product name"}
                    price={"1500 AMD"}
                />
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.ProductsList__renderer]}
                    image={"/product-image.jpg"}
                    name={"Product name"}
                    price={"1500 AMD"}
                />
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.ProductsList__renderer]}
                    image={"/product-image.jpg"}
                    name={"Product name"}
                    price={"1500 AMD"}
                />
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.ProductsList__renderer]}
                    image={"/product-image.jpg"}
                    name={"Product name"}
                    price={"1500 AMD"}
                />
                <Card
                    onClick={handleProductRedirect}
                    classes={[styles.ProductsList__renderer]}
                    image={"/product-image.jpg"}
                    name={"Product name"}
                    price={"1500 AMD"}
                />
            </div>
        </div>
    )
}