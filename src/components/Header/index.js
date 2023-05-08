import React, {useState} from 'react';
import logoHeader from '../../image/main/Vectorred.svg'
import {GrLanguage} from "react-icons/gr"
import '../../style/main/Header.scss'
import '../../style/main/media/MediaHeader.scss'
import {NavLink} from "react-router-dom";
import burgerImg from "./../../image/main/бургер.svg"
import Menu from "./Menu/Menu";


const Header = () => {

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
                        <NavLink to={`/`} onClick={() => window.scroll(0, 0)}>Главное</NavLink>
                        <NavLink to={`/about_us`} onClick={() => window.scroll(0, 0)}>О нас</NavLink>
                        <div className="courses">
                            <NavLink to={`/`}>О курсах</NavLink>
                            <div className="ul">
                                <NavLink to={`/MainFr`} onClick={() => window.scroll(0, 0)}>Frontend</NavLink> <br/>
                                <NavLink to={`/UxUi`} onClick={() => window.scroll(0, 0)}>UI/UX design</NavLink> <br/>
                                <NavLink to={`/backend`} onClick={() => window.scroll(0, 0)}>Backend</NavLink>
                            </div>
                        </div>
                        <NavLink to={`/it_club`} onClick={() => window.scroll(0, 0)}>Клуб</NavLink>
                        <a href="#footer">Контакты</a>
                    </div>

                    <div className="header--languages">
                        <GrLanguage className="header--languages__icon"/>
                        <a href="#">КР/</a>
                        <a href="#">РУС/</a>
                        <a href="#">ENG</a>
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