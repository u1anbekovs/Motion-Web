import React from "react";
import {NavLink} from "react-router-dom";
import "./Menu.scss"
import Close from "./../../../image/main/Group 14.svg"
import {GrLanguage} from "react-icons/gr";
import {useTranslation} from "react-i18next";

const Menu = ({burgerF}) => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <div className="burger--contents" onClick={e => e.stopPropagation()}>
                <span onClick={() => burgerF(true)}><img src={Close} alt=""/></span>
                <div className="burger--contents__link">
                    <NavLink to={`/about_us`} onClick={() => window.scroll(0, 0) || burgerF(true)}>О НАС</NavLink>
                    <NavLink to={`/`} onClick={() => window.scroll(0, 0) || burgerF(true)}>Курсы</NavLink>
                    <NavLink to={`/MainFr`}
                             onClick={() => window.scroll(0, 0) || burgerF(true)}><b>Frontend</b></NavLink>
                    <NavLink to={`/UxUi`} onClick={() => window.scroll(0, 0) || burgerF(true)}><b>UI/UX
                        design</b></NavLink>
                    <NavLink to={`/it_club`} onClick={() => window.scroll(0, 0) || burgerF(true)}>Клуб</NavLink>
                    <a href="#footer" onClick={() => window.scroll(0, 0) || burgerF(true)}>Контакты</a>

                </div>
                <div className="languages">
                    <GrLanguage className="languages__icon"/>
                    <a href="#" onClick={() => changeLanguage("kg")}>KGZ/</a>
                    <a href="#" onClick={() => changeLanguage("ru")}>RU/</a>
                    <a href="#" onClick={() => changeLanguage("en")}>ENG</a>
                </div>

            </div>
        </>


    );
};

export default Menu;
