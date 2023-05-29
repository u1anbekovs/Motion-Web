import React from 'react';
import './License.scss'
import img from "../../../image/about-us/image 9.svg"
import {useTranslation} from "react-i18next";
const License = () => {
    const {t} = useTranslation()
    return (
        <section id="list">
            <div className="container">
                <div className="list">
                    <div>
                        <div>
                            <h1 className="list--title">{t("text58")}</h1>
                            <p className="list--desc">{t("text59")}<br/>
                                {t("text60")}<br/> {t("text61")}</p>
                        </div>
                        <div className="list--block">
                            <h1 className="list--number">01.</h1>
                            <h2 className="list--title2">{t("text62")}</h2>
                        </div>
                        <div className="list--line"></div>
                        <div className="list--block">
                            <h1 className="list--number">02.</h1>
                            <h2 className="list--title2">{t("text63")}<br/>{t("text64")}</h2>
                        </div>
                        <div className="list--line"></div>
                    </div>
                    <img src={img} className="list--img1" alt=""/>
                </div>
            </div>

        </section>
    );
};

export default License;