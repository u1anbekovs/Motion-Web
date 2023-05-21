import React, {useState} from 'react';
import icon5 from "../../../image/main/Dawn.svg"
import imgCourse2 from "../../../image/main/girlFront.svg"
import imgCourse3 from "../../../image/main/dizain.svg"
import imgCourse5 from "./../../../image/about-us/peeps-avatar.svg"
import '../../../style/main/Courses.scss'
import Modal from "../../../modalPage/Modal";
import modal from "../../../image/main/smiling-face 2.svg";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";


const Courses = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    const submitForm = () => {
        setSubmitted(true)
    }

    const [start, setStart] = useState(true)
    const startForm = () => {
        setStart(true)
    }

    return (
        <section id="course">
            <div className="course">
                <section>
                    <div className="scroll text1" style={{background: "#EC3025"}}>
                        <div>
                            курсы <span>курсы <span
                            className="course--vector"></span> </span> курсы <span>курсы - </span> курсы{" "}
                            <span>курсы - </span> курсы <span>курсы - </span>
                            курсы <span>курсы - </span> курсы <span>курсы - </span> курсы{" "}
                            <span>курсы - </span> курсы <span>курсы - </span>
                        </div>
                        <div>
                            курсы <span>курсы - </span> курсы <span>курсы - </span> курсы{" "}
                            <span>курсы - </span> курсы <span>курсы - </span>
                            курсы <span>курсы
курсы - </span> курсы <span>курсы - </span> курсы{" "} <span>курсы - </span> курсы <span>курсы - </span>
                        </div>
                    </div>
                    <div className="scroll2 text2"
                         style={{background: "#4886FF", transform: "rotate(-2deg)"}}>
                        <div>
                            FRONTEND <span>BACKEND </span> UX UI <span>FRONTEND </span>{" "}
                            BACKEND{" "} <span>
                UX UI <img className="course--icon" src={icon5} alt=""/>{" "}              </span>{" "}
                            FRONTEND <span>BACKEND </span> FRONTEND <span>BACKEND </span> UX
                            UI <span>FRONTEND </span>{" "}
                            BACKEND{" "} <span>
                UX UI <img className="course--icon" src={icon5} alt=""/>{" "}              </span>{" "}
                            FRONTEND <span>BACKEND </span></div>
                        <div> FRONTEND <span>BACKEND </span>
                            UX UI <span>FRONTEND </span> BACKEND{" "}
                            <span>                UX UI <img className="course--icon" src={icon5} alt=""/>{" "}
              </span>{" "} FRONTEND <span>BACKEND </span>
                            FRONTEND <span>BACKEND </span> UX UI <span>FRONTEND </span>{" "} BACKEND{" "}
                            <span>                UX UI <img className="course--icon" src={icon5} alt=""/>{" "}
              </span>{" "} FRONTEND <span>BACKEND </span>
                        </div>
                    </div>
                </section>
                <div className="course--projects">
                    <div className="course--block1">
                        <div className="course--block">
                            <img src={imgCourse2} className="course--girl" alt=""/>
                        </div>
                        <div className="course--box">
                            <h1 className="course--title3">FRONTEND</h1>
                            <p className="course--desc1">{t("text15")}</p>
                            <div className="course--buttons">
                                <button className="course--btn1">HTML</button>
                                <button className="course--btn4">CSS</button>
                                <button className="course--btn1">SASS</button>
                                <button className="course--btn1">JQuery</button>
                                <button className="course--btn3">JS</button>
                            </div>
                            <div className="course--buttons2">
                                <button className="course--btn1">React</button>
                                <button className="course--btn4">JSON</button>
                                <button className="course--btn1">REDUX</button>
                                <button className="course--btn2">TypeScript</button>
                                <button className="course--btn5">{t("text17")}</button>
                                <button className="course--btn5">7 {t("text18")}</button>
                            </div>
                            <button onClick={() => navigate(`/MainFr`) || window.scroll(0,0)} className="course--btn">{t("text10")}</button>
                            <button className="course--btn6" onClick={() => setStart(!start)}>{t("text7")}</button>
                        </div>
                    </div>
                    <div>
                        <div className="course--block2">
                            <img src={imgCourse3} className="course--design" alt=""/>
                        </div>
                        <div className="course--box">
                            <h1 className="course--title3">UX/UI {t("text19")}</h1>
                            <p className="course--desc1">{t("text16")}</p>
                            <div className="course--buttons">
                                <button className="course--btn1">Figma</button>
                                <button className="course--btn2">Adobe XD</button>
                                <button className="course--btn2">Photoshop</button>
                            </div>
                            <div className="course--buttons2">
                                <button className="course--btn5">{t("text17")}</button>
                                <button className="course--btn5">3 {t("text18")}</button>
                            </div>
                            <div className="course--but1">
                                <button onClick={() => navigate(`/UxUi  `) || window.scroll(0,0)} className="course--btn">{t("text10")}</button>
                                <button className="course--btn6" onClick={() => setStart(!start)}>{t("text7")}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="course2">
                    <div className="course2--box">
                        <button className="course2--btn1">КРУУУТОО...</button>
                        <img src={imgCourse5} className="course2--image" alt=""/>
                    </div>
                    <div className="course2--block">
                        <div className="course2--titles">
                            <div>
                                <h1 className="course2--title1">{t("text20")}</h1>
                                <p className="course2--desc1">{t("text21")}</p>
                            </div>
                                <div className="course2--left"><h1 className="course2--title2">18 {t("text22")} <br/>
                                    <span className="course2--desc2">в</span> 18:00
                                    <span className="course2--desc2">мастер класс <br/>  по </span> FRONTEND
                            </h1>
                                <button className="course2--btn2" onClick={() => setStart(!start)}>{t("text23")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={start ? "modal" : "modal active"} onClick={() => setStart(true)}>
                {!submitted ? <Modal submitForm={submitForm} startForm={startForm}/> : <img src={modal} alt=""/>}
            </div>

        </section>
    );
};

export default Courses;