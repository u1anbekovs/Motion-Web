import React from "react";
import "./Motion.scss";
import {NavLink} from "react-router-dom";
import smile from "../../../image/main/smile-face.svg";
import smile1 from "../../../image/main/open-key.svg";
import smile2 from "../../../image/main/select.svg";
import smile3 from "../../../image/main/rocket.svg";
import {useTranslation} from "react-i18next";


const Choice = () => {
    const {t} = useTranslation()
    return (
        <section id="choice">
            <div className="container">
                <div className="choice">

                    <h1>{t("text24")} <span>MOTION WEB <br/> IT ACADEMY</span>-<br/> {t("text26")}<br/> {t("text25")}</h1>

                    <div className="choice--card">
                        <div className="choice--card__details">
                            <img src={smile} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>{t("text27")}</h3>
                                <p>{t("text28")}</p>
                            </div>
                        </div>
                        <div className="choice--card__details">
                            <img src={smile1} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>{t("text29")}</h3>
                                <p>{t("text30")}</p>
                            </div>
                        </div>
                        <div className="choice--card__details">
                            <img src={smile2} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>{t("text31")}</h3>
                                <p>{t("text32")}</p>
                            </div>
                        </div>
                        <div className="choice--card__details">
                            <img src={smile3} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>{t("text33")}</h3>
                                <p>{t("text34")}</p>
                                <NavLink to={`/club`} onClick={() => window.scroll(0, 0)}>{t("text10")}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choice;