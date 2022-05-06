import {FC, ReactNode} from "react";
import Navbar from "@components/Navbar";

interface MainLayout {
    children: ReactNode
}

export const MainLayout: FC<MainLayout> = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}