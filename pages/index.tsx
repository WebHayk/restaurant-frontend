import {FC} from "react";
import MainLayout from "@layouts/MainLayout";
import Banner from "@components/Home/Banner";

const HomePage: FC = () => {
    return (
        <MainLayout>
            <Banner />
        </MainLayout>
    )
}

export default HomePage