import React, {FC, useEffect, useState} from "react";
import styles from "./Navbar.module.scss";
import NavItem from "@components/Navbar/NavItem";
import Image from "next/image";
import Button from "@ui/Button";
import LanguageDropdown from "@components/Navbar/LanguageDropdown";
import TextField from "@ui/TextField";
import cs from "classnames";
import {useMainSelector} from "@store/selectors";

export const Navbar: FC = () => {

    let reduxState = useMainSelector();
    let {language} = reduxState;

    let currentLanguageIcon = language == "en" ? "/usa-icon.svg" : language == "ru" ? "/russia-icon.svg" : "/armenia-icon.svg";

    let [scrollPosition, setScrollPosition] = useState<number>(0);
    let [openLanguageDropdown, setOpenLanguageDropdown] = useState<boolean>(false);

    let [state, setState] = useState({
        showSearch: false,
        query: ""
    });

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDropdownShow = () => setOpenLanguageDropdown(!openLanguageDropdown);

    const handleSearchShow = () => setState({
        ...state,
        showSearch: !state.showSearch
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let query = event.target.value;

        setState({
            ...state,
            query
        });
    };

    const contactAction = () => document.location.href = "tel:+375292771265";

    return (
        <div className={cs({
            [styles.Navbar]: true,
            [styles.Navbar__scrolled]: scrollPosition > 50
        })}>
            <div className={styles.Navbar__content}>
                <div className={styles.Navbar__left}>
                    {
                        !state.showSearch
                        ?
                        <ul className={styles.Navbar__list}>
                            <NavItem
                                href={"/"}
                                icon={"/home-icon.svg"}
                            >
                                {reduxState.static?.navbar.list.home}
                            </NavItem>
                            <NavItem
                                href={"/products"}
                                icon={"/menu-icon.svg"}
                            >
                                {reduxState.static?.navbar.list.menu}
                            </NavItem>
                            <NavItem
                                href={"/about"}
                                icon={"/about-icon.svg"}
                            >
                                {reduxState.static?.navbar.list.about}
                            </NavItem>
                        </ul>
                        :
                        <div className={styles.Navbar__row}>
                            <TextField
                                type={"text"}
                                onChange={handleSearchChange}
                                name={"search"}
                                value={state.query}
                                placeholder={reduxState.static?.navbar.search}
                            />
                            <div onClick={handleSearchShow} className={styles.Navbar__close}>
                                <Image
                                    src={"/close-icon.svg"}
                                    alt={"close-icon"}
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </div>
                    }
                </div>
                <div className={styles.Navbar__right}>
                    <button onClick={handleSearchShow} className={styles.Navbar__search}>
                        <Image
                            src={state.showSearch ? "/close-icon.svg" : "/search-icon.svg"}
                            alt={"search-icon"}
                            width={25}
                            height={25}
                        />
                    </button>
                    <button
                         onClick={handleDropdownShow}
                         className={styles.Navbar__language}
                    >
                        <Image
                            src={currentLanguageIcon}
                            alt={"flag-icon"}
                            width={25}
                            height={25}
                        />
                    </button>
                    <Button
                        onClick={contactAction}
                        color={"black"}
                        variant={"small"}
                        type={"button"}
                    >
                        {reduxState.static?.navbar.contact}
                    </Button>
                    <LanguageDropdown
                        setOpen={setOpenLanguageDropdown}
                        open={openLanguageDropdown}
                    />
                </div>
            </div>
        </div>
    )
}