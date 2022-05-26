import {FC} from "react";
import MainLayout from "@layouts/MainLayout";
import Products from "@components/Products";

const ProductsPage: FC = () => {
    return (
        <MainLayout>
            <Products />
        </MainLayout>
    )
}

export default ProductsPage