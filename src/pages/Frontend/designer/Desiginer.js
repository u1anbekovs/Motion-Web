import React from 'react';
import Card from "../../../image/frontEnd/designer.png";
import './designer.scss'
import {useTranslation} from "react-i18next";

const Desiginer = () => {
    const {t} =useTranslation()
    return (
        <div id="designer">
            <div className="container">
                <div className="designer">
                    <div className="designer--choose">
                        <h2>{t("text129")}</h2> <br/>
                        <p>{t("text130")}</p>
                    </div>
                    <div className="designer--fon">
                        <img src={Card} alt=""/>
                        <div className="designer--fon__application">
                            <form>
                                <input type="text" placeholder={t("text47")}/>
                            </form>
                            <form>
                                <input type="text" placeholder={t("text46")}/>
                            </form>
                            <div className="designer--fon__application--checked">
                                <input type="checkbox" className="input"/>
                                <p>{t("text44")}</p>
                            </div>
                            <button>{t("text7")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Desiginer;