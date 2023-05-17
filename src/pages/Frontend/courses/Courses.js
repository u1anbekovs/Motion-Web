import React from 'react';
import FirstImg from "../../../image/frontEnd/first.png";
import secondImg from "../../../image/frontEnd/second.png";
import thirdImg from "../../../image/frontEnd/third.png";
import './courses.scss'

const Courses = () => {
    return (
        <div id="courses">
            <div className="container">
                <div className="frontEnd--courses">
                    <h2>Кому подойдёт этот курс</h2>
                    <div className="frontEnd--courses__inform">
                        <div className="frontEnd--courses__inform--first">
                            <div className="frontEnd--courses__inform--first__fon">
                                <img src={FirstImg} alt=""/>
                            </div>
                            <h3>Новичкам</h3>
                            <p>Научитесь с нуля разрабатывать интерфейсы. <br/>Узнаете, как с помощью дизайна
                                направлять <br/>пользователей и решать задачи</p>

                        </div>
                        <div className="frontEnd--courses__inform--first">
                            <div className="frontEnd--courses__inform--first__fon">
                                <img src={secondImg} alt=""/>
                            </div>
                            <h3>Junior-дизайнерам</h3>
                            <p>Научитесь с нуля разрабатывать интерфейсы. <br/>Узнаете, как с помощью дизайна
                                направлять <br/>пользователей и решать задачи</p>

                        </div>
                        <div className="frontEnd--courses__inform--first">
                            <div className="frontEnd--courses__inform--first__fon">
                                <img src={thirdImg} alt=""/>
                            </div>
                            <h3>Опытным дизайнерам</h3>
                            <p>Получите навыки в продуктовом и UX-<br/>дизайне, заполните пробелы в знаниях. <br/>Сможете
                                создавать прототипы приложений и <br/> повысить стоимость своей работы</p>

                        </div>
                    </div>
                </div>
                <div className="frontEnd--title">
                    <div className="frontEnd--title__first">
                        <h1 >6 месяца <br/> <span className="frontEnd--skill">Обучения</span></h1>
                    </div>
                    <div className="frontEnd--title__first">
                        <h1>3 раза <br/> <span>В неделю по 2 часа</span></h1>
                    </div>
                    <div className="frontEnd--title__first">
                        <h1>3 раза<br/> <span>Английский по 1 часу </span></h1>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Courses;