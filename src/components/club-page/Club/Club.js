import React from "react";
import "./Club.scss";
import {useTranslation} from "react-i18next";

const Club = () => {
    const {t} = useTranslation()
    return (
        <section id="clubUs">
            <div className="container">
                <div className="clubUs">
                    <div className="clubUs--block">
                        <h1><span>{t("text66")}</span> <br/> {t("text67")}</h1>
                        <p>{t("text68")}</p>
                    </div>

                    <div className="clubUs--block1">
                        <div>
                            <h1>3</h1>
                            <p>{t("text18")}</p>
                        </div>
                        <div>
                            <h1>{t("text71")}</h1>
                            <p>{t("text69")}</p>
                        </div>
                        <div>
                            <h1>3</h1>
                            <p>{t("text70")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Club;