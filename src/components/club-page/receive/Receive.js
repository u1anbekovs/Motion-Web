import React from 'react';
import "./../../../style/it-club/Receive.scss"
import it from "./../../../image/it-club/it.svg"
import girl from "./../../../image/it-club/girl.svg"
import book from "./../../../image/it-club/book.svg"
import pers from "./../../../image/it-club/pers.svg"
import sound from "./../../../image/it-club/sound.svg"
import laptop from "./../../../image/it-club/laptop.svg"
import negr from "./../../../image/it-club/negr.svg"
import {useTranslation} from "react-i18next";

const Receive = () => {
    const {t} = useTranslation()
    return (
        <div id="second">
            <div className="container">
                <div className="second">
                    <h1>{t("text79")}<br/>{t("text80")}</h1>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={it} alt=""/>
                        </div>
                        <p>{t("text81")}</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={girl} alt=""/>
                            <img src={book} alt=""/>
                        </div>
                        <p>{t("text82")}</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={pers} alt=""/>
                        </div>
                        <p>{t("text75")}</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={sound} alt=""/>
                        </div>
                        <p>{t("text83")}</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={laptop} alt=""/>
                            <img src={negr} alt=""/>
                        </div>
                        <p>{t("text84")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receive;