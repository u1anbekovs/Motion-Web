import React from 'react';
import "./../../../style/main/AboutUs.scss"
import {NavLink} from "react-router-dom";

const DetailUs = () => {

    return (
        <section id="us">
            <div className="container">
                <div className="us">

                    <div className="us--block">
                        <h1>О НАС</h1>
                        <div className="us--block__p">
                            <p>Motion Web IT academy — это международный образовательный проект, который готовит
                                специалистов-практиков IT сферы.</p>
                            <p>Благодаря нашему постоянному развитию мы разработали эффективные программы для подготовки
                                IT-специалистов. Нам удалось соединить лучшие практики офлайн — и онлайн-образования и
                                таким образом достичь высоких результатов.</p>
                            <NavLink to={`/about_us`} onClick={() => window.scroll(0,0)}>Подробнее</NavLink>
                        </div>
                    </div>

                    <div className="us--block1">
                        <div>
                            <h1>2000+</h1>
                            <p>Выпусников</p>
                        </div>
                        <div>
                            <h1>2</h1>
                            <p>Года</p>
                        </div>
                        <div>
                            <h1>10+</h1>
                            <p>Менторов</p>
                        </div>
                        <div>
                            <h1>95%</h1>
                            <p>Трудоустроились</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailUs;
