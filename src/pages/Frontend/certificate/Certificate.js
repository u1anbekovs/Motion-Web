import React from 'react';
import img from "../../../image/frontEnd/certificate.png"
import './certificate.scss'
import {useTranslation} from "react-i18next";

const Certificate = () => {
    const {t} =useTranslation()
    return (
        <div id="certificate">
            <div className="container">
                <div className="certificate">
                    <div className="certificate--text">
                        <h3>{t("text123")}</h3>
                        <h6>{t("text124")}</h6>
                        <div className="certificate--text__buttons">
                            <button>{t("text125")}</button>
                            <button>{t("text126")}</button>
                            <button>{t("text127")}</button>
                        </div>
                        <h6>{t("text128")}</h6>
                    </div>
                    <div className="certificate--img">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;