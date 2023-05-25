import React from 'react';
import FirstImg from "../../../image/frontEnd/first.png";
import secondImg from "../../../image/frontEnd/second.png";
import thirdImg from "../../../image/frontEnd/third.png";
import './courses.scss'
import {useTranslation} from "react-i18next";

const Courses = () => {
    const {t} =useTranslation()
    return (
        <div id="courses">
            <div className="container">
                <div className="frontEnd--courses">
                    <h2>{t("text92")}</h2>
                    <div className="frontEnd--courses__inform">
                        <div className="frontEnd--courses__inform--first">
                            <div className="frontEnd--courses__inform--first__fon">
                                <img src={FirstImg} alt=""/>
                            </div>
                            <h3>{t("text93")}</h3>
                            <p>{t("text94")}</p>

                        </div>
                        <div className="frontEnd--courses__inform--first">
                            <div className="frontEnd--courses__inform--first__fon">
                                <img src={secondImg} alt=""/>
                            </div>
                            <h3>{t("text95")}</h3>
                            <p>{t("text94")}</p>

                        </div>
                        <div className="frontEnd--courses__inform--first">
                            <div className="frontEnd--courses__inform--first__fon">
                                <img src={thirdImg} alt=""/>
                            </div>
                            <h3>{t("text96")}</h3>
                            <p>{t("text97")}</p>

                        </div>
                    </div>
                </div>
                <div className="frontEnd--title">
                    <div className="frontEnd--title__first">
                        <h1 >{t("text98")} <br/> <span className="frontEnd--skill">{t("text99")}</span></h1>
                    </div>
                    <div className="frontEnd--title__first">
                        <h1>{t("text100")}<br/> <span>{t("text101")}</span></h1>
                    </div>
                    <div className="frontEnd--title__first">
                        <h1>{t("text100")}<br/> <span>{t("text102")} </span></h1>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Courses;