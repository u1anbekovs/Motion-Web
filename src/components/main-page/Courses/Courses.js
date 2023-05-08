import React, {useState} from 'react';
import icon5 from "../../../image/main/Dawn.svg"
import imgCourse2 from "../../../image/main/girlFront.svg"
import imgCourse3 from "../../../image/main/dizain.svg"
import imgCourse4 from "../../../image/main/backend.svg"
import imgCourse5 from "./../../../image/about-us/peeps-avatar.svg"
import '../../../style/main/Courses.scss'
import Modal from "../../../modalPage/Modal";
import modal from "../../../image/main/smiling-face 2.svg";


const Courses = () => {

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
                            <p className="course--desc1">Фронтенд-разработчик — <br/>
                                это специалист, который создаёт <br/> пользовательские интерфейсы</p>
                            <div className="course--buttons">
                                <button className="course--btn1">HTML</button>
                                <button className="course--btn1">React</button>
                                <button className="course--btn2">TypeScript</button>
                                <button className="course--btn3">JS</button>
                            </div>
                            <div className="course--buttons2">
                                <button className="course--btn4">CSS</button>
                                <button className="course--btn1">SASS</button>
                                <button className="course--btn5">+Английский</button>
                                <button className="course--btn5">7 месяцев</button>
                            </div>
                            <button className="course--btn">Подробнее</button>
                            <button className="course--btn6" onClick={() => setStart(!start)}>Оставить заявку</button>
                        </div>
                    </div>
                    <div>
                        <div className="course--block2">
                            <img src={imgCourse3} className="course--design" alt=""/>
                        </div>
                        <div className="course--box">
                            <h1 className="course--title3">UX/UI DESIGN</h1>
                            <p className="course--desc1">UX/UI-дизайн — это процесс создания <br/> интерактивных,
                                удобных интерфейсов</p>
                            <div className="course--buttons">
                                <button className="course--btn1">Figma</button>
                                <button className="course--btn2">Adobe XD</button>
                                <button className="course--btn2">Photoshop</button>
                            </div>
                            <div className="course--buttons2">
                                <button className="course--btn5">+Английский</button>
                                <button className="course--btn5">3 месяцев</button>
                            </div>
                            <div className="course--but1">
                                <button className="course--btn">Подробнее</button>
                                <button className="course--btn6" onClick={() => setStart(!start)}>Оставить заявку
                                </button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="course--block">
                            <img src={imgCourse4} className="course--design" alt=""/>
                        </div>
                        <div className="course--box">
                            <h1 className="course--title3">BACKEND</h1>
                            <p className="course--desc1">Бэкенд-разработчик — это специалист, <br/> который отвечает за
                                внутреннюю и вычислительную логику веб-сайта</p>
                            <div className="course--buttons">
                                <button className="course--btn1">HTML</button>
                                <button className="course--btn1">React</button>
                                <button className="course--btn3">JS</button>
                                <button className="course--btn4">CSS</button>
                                <button className="course--btn1">SASS</button>
                            </div>

                            <div className="course--buttons2">
                                <button className="course--btn5">+Английский</button>
                                <button className="course--btn5">3 месяцев</button>
                            </div>

                            <div className="course--but">
                                <button className="course--btn">Подробнее</button>
                                <button className="course--btn6" onClick={() => setStart(!start)}>Оставить заявку
                                </button>
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
                                <h1 className="course2--title1">ПРОБНЫЕ УРОКИ</h1>                    <p
                                className="course2--desc1">Прочуствуй дружную атмосферу нашей <br/>
                                академии! Оставь заявку на пробный <br/> урок и стань ближе к своей цели!</p></div>
                            <div className="course2--left"><h1 className="course2--title2">18 февраля <br/> <span
                                className="course2--desc2">в</span> 18:00 <span
                                className="course2--desc2">мастер класс <br/>  по </span> FRONTEND
                            </h1>
                                <button className="course2--btn2" onClick={() => setStart(!start)}>Записаться</button>
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