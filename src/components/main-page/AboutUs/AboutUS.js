import React from 'react';
import "./../../../style/main/AboutUs.scss"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const DetailUs = () => {
    const {t} = useTranslation()

    return (
        <section id="us">
            <div className="container">
                <div className="us">

                    <div className="us--block">
                        <h1>{t("text3")}</h1>
                        <div className="us--block__p">
                            <p>{t("text8")}</p>
                            <p>{t("text9")}</p>
                            <NavLink to={`/about_us`} onClick={() => window.scroll(0, 0)}>{t("text10")}</NavLink>
                        </div>
                    </div>

                    <div className="us--block1">
                        <div>
                            <h1>2000+</h1>
                            <p>{t("text11")}</p>
                        </div>
                        <div>
                            <h1>2</h1>
                            <p>{t("text12")}</p>
                        </div>
                        <div>
                            <h1>10+</h1>
                            <p>{t("text13")}</p>
                        </div>
                        <div>
                            <h1>95%</h1>
                            <p>{t("text14")}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailUs;
