import {FC} from "react";
import {useRouter} from "next/router";
import Product from "@components/ProductDetail";
import MainLayout from "@layouts/MainLayout";

const ProductDetail: FC = () => {

    let router = useRouter();
    let query = router.query;

    return (
        <MainLayout>
            <Product />
        </MainLayout>
    )
}

export default ProductDetail