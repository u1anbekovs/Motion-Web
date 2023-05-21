import React from 'react';
import "../style/main/Last.scss"
import last from "../image/main/smiling-face 2.svg"
import {useTranslation} from "react-i18next";

const SingForm = () => {
    const {t} = useTranslation()
    return (
        <section id="application">
            <div className="container">
                <div className="application">

                    <div className="application--text">
                        <h1>{t("text40")} <br/> {t("text41")}</h1>
                        <p>{t("text42")} <br/> {t("text43")}</p>
                    </div>

                    <div className="application--img">
                        <img src={last} alt=""/>
                        <p>{t("text87")}</p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default SingForm;