import React, {useState} from 'react';
import logoHeader from '../../image/main/Vectorred.svg'
import {GrLanguage} from "react-icons/gr"
import '../../style/main/Header.scss'
import '../../style/main/media/MediaHeader.scss'
import {NavLink} from "react-router-dom";
import burgerImg from "./../../image/main/бургер.svg"
import Menu from "./Menu/Menu";
import {useTranslation} from "react-i18next";


const Header = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const [burger, setBurger] = useState(true)
    const burgerF = () => {
        setBurger(true)
    }


    return (
        <section id="header">
            <div className="container">
                <div className="header">

                    <img src={logoHeader} alt=""/>

                    <div className="header--pages">
                        <NavLink to={`/`} onClick={() => window.scroll(0, 0)}>{t("text2")}</NavLink>
                        <NavLink to={`/about_us`} onClick={() => window.scroll(0, 0)}>{t("text3")}</NavLink>
                        <div className="courses">
                            <NavLink to={`/`}>{t("text4")}</NavLink>
                            <div className="ul">
                                <NavLink to={`/MainFr`} onClick={() => window.scroll(0, 0)}>Frontend</NavLink> <br/>
                                <NavLink to={`/UxUi`} onClick={() => window.scroll(0, 0)}>UI/UX design</NavLink> <br/>
                            </div>
                        </div>
                        <NavLink to={`/it_club`} onClick={() => window.scroll(0, 0)}>{t("text5")}</NavLink>
                        <a href="#footer">{t("text")}</a>
                    </div>

                    <div className="header--languages">
                        <GrLanguage className="header--languages__icon"/>
                        <a href="#" onClick={() => changeLanguage("kg")}>KGZ/</a>
                        <a href="#" onClick={() => changeLanguage("ru")}>RU/</a>
                        <a href="#" onClick={() => changeLanguage("en")}>ENG</a>
                    </div>

                    <div className="header--menuBurger">
                        <span><img onClick={() => setBurger(!burger)} src={burgerImg} alt=""/></span>
                        <div className={burger ? "burger" : "burger active"} onClick={() => setBurger(true)}>
                            <Menu burgerF={burgerF}/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;