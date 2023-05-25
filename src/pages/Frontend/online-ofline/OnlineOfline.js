import React, {useState} from 'react';
import './onlineOf.scss'
import {useTranslation} from "react-i18next";

const OnlineOfline = () => {
    const {t} = useTranslation()
    const [choose, SetChoose] = useState(false)
    const [choose2, SetChoose2] = useState(false)

    return (
            <div id="OnlineOfline">
                <div className="container">
                        <div className="OnOf">
                            <button style={{transform: "3s"}} onClick={() => SetChoose(!choose)}>{t("text103")}</button>
                            <button onClick={() => SetChoose2(!choose2)}>{t("text104")}</button>

                            <div className="OnOf--ofline">
                                <div style={{
                                    display: choose ? "block" : "none",
                                    transition: choose ? "3s" : "0", backdropFilter: 'blur(10px)',
                                    marginLeft: '-958px'
                                }} onClick={() => SetChoose(!choose)} className='OnOf--ofline__first'>
                                    <div className="OnOf--ofline__first--three">
                                        <h1>{t("text103")}</h1>
                                        <li>{t("text105")}</li>
                                        <li>{t("text106")}</li>
                                        <li>{t("text108")}</li>
                                    </div>
                                </div>

                                <div style={{
                                    display: choose2 ? "block" : "none",
                                    transition: choose2 ? "3s" : "0", backdropFilter: 'blur(10px)',
                                    marginLeft: '-958px'
                                }} onClick={() => SetChoose2(!choose2)} className='OnOf--ofline__for'>
                                    <div className="OnOf--ofline__first--three">
                                        <h1>{t("text104")}</h1>
                                        <li>{t("text105")}</li>
                                        <li>{t("text106")}</li>
                                        <li>{t("text107")}</li>
                                        <li>{t("text109")}</li>
                                    </div>
                                </div>

                                {/*==*/}
                                <div className='OnOf--ofline__first2'>
                                    <div className="OnOf--ofline__first--three">
                                        <h1>{t("text103")}</h1>
                                        <li>{t("text105")}</li>
                                        <li>{t("text106")}</li>
                                        <li>{t("text108")}</li>

                                    </div>
                                </div>

                                <div  className='OnOf--ofline__for2'>
                                    <div className="OnOf--ofline__first--three">
                                        <h1>{t("text104")}</h1>
                                        <li>{t("text105")}</li>
                                        <li>{t("text106")}</li>
                                        <li>{t("text107")}</li>
                                        <li>{t("text109")}</li>
                                    </div>
                                </div>
                                {/*==*/}

                        <div onClick={() => SetChoose(!choose)} style={{display: choose ? "block" : "none"}} className="OnOf--window"></div>
                        <div  onClick={() => SetChoose2(!choose2)} style={{display: choose2 ? "block" : "none"}} className="OnOf--window2"></div>
                    </div>
                </div>

                </div>
            </div>
    )

};

export default OnlineOfline;