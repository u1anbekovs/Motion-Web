import React from 'react';
import './program.scss'
import {useTranslation} from "react-i18next";
const Program = () => {
    const {t} = useTranslation()
    return (
        <div id="program">
            <div className="container">
                <div className="program">

                    <div className="program--courses">
                        <h1>{t("text138")}</h1>
                        <p>{t("text139")}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Program;