import {FC} from "react";
import MainLayout from "@layouts/MainLayout";
import Banner from "@components/Home/Banner";
import PopularMenu from "@components/Home/PopularMenu";
import About from "@components/Home/About";

const HomePage: FC = () => {
    return (
        <MainLayout>
            <Banner />
            <PopularMenu />
            <About />
        </MainLayout>
    )
}

export default HomePage