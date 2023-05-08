import React from "react";
import "../../../style/it-club/Last.scss";
import smile from "../../../image/main/smile-face.svg";
import smile1 from "../../../image/main/open-key.svg";
import smile2 from "../../../image/main/select.svg";
import smile3 from "../../../image/main/rocket.svg";

const Last = () => {
    return (
        <div id="last">
            <div className="container">
                <div className="last">
                    <h1>Разработка <br/> проекта</h1>

                    <div className="last--card">
                        <div className="last--card__details">
                            <img src={smile} alt=""/>
                            <div className="last--card__details--text">
                                <h3>Робота в команде</h3>
                                <p>На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью языков
                                    программирования и дополнительных технологий. Сможете разрабатывать планировщики
                                    задач, мессенджеры, интернет-магазины</p>
                            </div>
                        </div>
                        <div className="last--card__details">
                            <img src={smile3} alt=""/>
                            <div className="last--card__details--text">
                                <h3>Brainstorming</h3>
                                <p>На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью языков
                                    программирования и дополнительных технологий. Сможете разрабатывать планировщики
                                    задач, мессенджеры, интернет-магазины</p>
                            </div>
                        </div>
                        <div className="last--card__details">
                            <img src={smile2} alt=""/>
                            <div className="last--card__details--text">
                                <h3>Презентация и защита </h3>
                                <p>На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью языков
                                    программирования и дополнительных технологий. Сможете разрабатывать планировщики
                                    задач, мессенджеры, интернет-магазины</p>
                            </div>
                        </div>
                        <div className="last--card__details">
                            <img src={smile1} alt=""/>
                            <div className="last--card__details--text">
                                <h3>Talking club</h3>
                                <p>На курсе вы научитесь создавать интерфейсы веб-сервисов с помощью языков
                                    программирования и дополнительных технологий. Сможете разрабатывать планировщики
                                    задач, мессенджеры, интернет-магазины</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Last;