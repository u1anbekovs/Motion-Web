import React from 'react';
import './text.scss'
import {useTranslation} from "react-i18next";


const Text = () => {
    const {t} = useTranslation()
    return (
        <div id="frontEnd--cours">
            <div className="container">
                <div className="frontEnd--cours">
                    <div className="frontEnd--cours__text">
                        <h2>{t("text110")}</h2>
                    </div>
                    <div className="frontEnd--cours__informs">
                        <div className="frontEnd--cours__informs--first">
                            <div className="frontEnd--cours__informs--first__title">
                                <h4>01.</h4>
                                <h3>{t("text111")}</h3>
                                <p>{t("text112")}</p>
                            </div>
                            <hr/>
                        </div>
                        <div className="frontEnd--cours__informs--first">
                            <div className="frontEnd--cours__informs--first__title">
                                <h4>02.</h4>
                                <h3>{t("text113")}</h3>
                                <p>{t("text114")}</p>
                            </div>
                            <hr/>
                        </div>
                        <div className="frontEnd--cours__informs--first">
                            <div className="frontEnd--cours__informs--first__title">
                                <h4>03.</h4>
                                <h3>{t("text115")}</h3>
                                <p>{t("text116")}</p>
                            </div>
                            <hr/>
                        </div>
                        <div className="frontEnd--cours__informs--first">
                            <div className="frontEnd--cours__informs--first__title">
                                <h4>04.</h4>
                                <h3>{t("text117")}</h3>
                                <p>{t("text118")}</p>
                            </div>
                            <hr/>

                        </div>
                        <div className="frontEnd--cours__informs--first">
                            <div className="frontEnd--cours__informs--first__title">
                                <h4>05.</h4>
                                <h3>{t("text119")}</h3>
                                <p>{t("text120")}</p>
                            </div>
                            <hr/>

                            <div className="frontEnd--cours__informs--first">
                                <div className="frontEnd--cours__informs--first__title">
                                    <h4>06.</h4>
                                    <h3>{t("text121")}</h3>
                                    <p>{t("text122")}</p>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Text;