import React from "react";
import "../../../style/main/Motion.scss";
import {NavLink} from "react-router-dom";
import smile from "../../../image/main/smile-face.svg";
import smile1 from "../../../image/main/open-key.svg";
import smile2 from "../../../image/main/select.svg";
import smile3 from "../../../image/main/rocket.svg";


const Choice = () => {
    return (
        <section id="choice">
            <div className="container">
                <div className="choice">

                    <h1>Почему <span>MOTION WEB <br/> IT ACADEMY</span>-<br/> лучший выбор <br/> для обучения</h1>

                    <div className="choice--card">
                        <div className="choice--card__details">
                            <img src={smile} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>Обучение с нуля до Junior</h3>
                                <p>На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью языков
                                    программирования и дополнительных технологий. Сможете разрабатывать планировщики
                                    задач, мессенджеры, интернет-магазины</p>
                            </div>
                        </div>
                        <div className="choice--card__details">
                            <img src={smile1} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>Open Space</h3>
                                <p>Наша компания предоставляет Open Space для наших студентов, где вы сможете комфортно
                                    заниматься учёбой, заводить знакомства с другими студентами и развивать навыки
                                    коммуникации</p>
                            </div>
                        </div>
                        <div className="choice--card__details">
                            <img src={smile2} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>Английский</h3>
                                <p>На данный момент на рынке больше востребованы специалисты владеющие английским
                                    языком, так как это даёт возможность выводить продукт в мировую арену. Поэтому мы
                                    предоставляем нашим студентам БЕСПЛАТНЫЕ языковые курсы</p>
                            </div>
                        </div>
                        <div className="choice--card__details">
                            <img src={smile3} alt=""/>
                            <div className="choice--card__details--text">
                                <h3>IT club</h3>
                                <p>IT-Клуб это мост между курсом и реальной работой. Анализируя курсы в Бишкеке мы
                                    решили открыть клуб, который поможет студентам подготовиться к реальным проектам.
                                    Участники не заканчивая курс смогут понять как работать в команде, научатся
                                    презентовать свои работы и поймут какие проблемы бывают на стадии разработки
                                </p>
                                <NavLink to={`/club`} onClick={() => window.scroll(0, 0)}>Подробнее</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choice;