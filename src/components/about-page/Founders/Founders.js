import React from 'react';
import '../../../style/aboutUs/Founders.scss'
import imgFound1 from "../../../image/about-us/image 6.svg"
import imgFound2 from "../../../image/about-us/image 7.svg"
import {useTranslation} from "react-i18next";

const Founders = () => {
    const {t} = useTranslation()
    return (
        <section id="found">
            <div className="container">
                <div className="found">
                    <div>
                        <h1 className="found--title">{t("text51")}</h1>
                        <p className="found--desc">{t("text52")}<br/>
                            {t("text53")} <br/>
                            {t("text54")} <br/>{t("text55")}</p>
                    </div>

                    <div className="found--images">
                        <div>
                            <img src={imgFound1} className="found--img1" alt=""/>
                            <h3 className="found--title2">Курманбек Жоошбаев</h3>
                            <p className="found--desc2">{t("text56")}</p>
                        </div>
                        <div>
                            <img src={imgFound2} className="found--img2" alt=""/>
                            <h3 className="found--title2">Канатбек Аскеров</h3>
                            <p className="found--desc2">{t("text57")}</p>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default Founders;