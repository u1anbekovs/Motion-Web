import React from "react";
import "../../../style/it-club/Last.scss";
import smile from "../../../image/main/smile-face.svg";
import smile1 from "../../../image/main/open-key.svg";
import smile2 from "../../../image/main/select.svg";
import smile3 from "../../../image/main/rocket.svg";
import {useTranslation} from "react-i18next";

const Last = () => {
    const {t} = useTranslation()
    return (
        <div id="last">
            <div className="container">
                <div className="last">
                    <h1>{t("text73")} <br/> {t("text74")}</h1>

                    <div className="last--card">
                        <div className="last--card__details">
                            <img src={smile} alt=""/>
                            <div className="last--card__details--text">
                                <h3>{t("text75")}</h3>
                                <p>{t("text76")}</p>
                            </div>
                        </div>
                        <div className="last--card__details">
                            <img src={smile3} alt=""/>
                            <div className="last--card__details--text">
                                <h3>{t("text77")}</h3>
                                <p>{t("text76")}</p>
                            </div>
                        </div>
                        <div className="last--card__details">
                            <img src={smile2} alt=""/>
                            <div className="last--card__details--text">
                                <h3>{t("text78")}</h3>
                                <p>{t("text76")}</p>
                            </div>
                        </div>
                        <div className="last--card__details">
                            <img src={smile1} alt=""/>
                            <div className="last--card__details--text">
                                <h3>{t("text71")}</h3>
                                <p>{t("text76")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Last;