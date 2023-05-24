import React from 'react';
import './inform.scss'
import {useTranslation} from "react-i18next";


const Inform = () => {
    const {t} = useTranslation()
    return (
        <div id="inform">
            <div className="container">
                <div className="inform">
                    <div className="inform--question">
                        <h3>{t("text24")} <span>MOTIN WEB <br/> IT ACADEMY</span>?</h3>
                    </div>
                    <div className="inform--text">
                        <p>{t("text90")}</p>

                        <h4>{t("text91")}</h4>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Inform;