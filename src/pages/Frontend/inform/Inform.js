import React from 'react';
import './inform.scss'


const Inform = () => {
    return (
        <div id="inform">
            <div className="container">
                <div className="inform">
                    <div className="inform--question">
                        <h3>Почему <span>MOTIN WEB <br/> IT ACADEMY</span>?</h3>
                    </div>
                    <div className="inform--text">
                        <p>На данном курсе мы сконцентрируем внимание на сайтах и научим вас с нуля проектировать их
                            на уровне ведущих дизайн-студий.</p>

                        <h4>Наша программа построена таким образом, что уже через 3 месяца ваших знаний будет
                            достаточно для поиска работы на позицию junior-дизайнера. Параллельно вы продолжите
                            обучение, пополняя портфолио сильными кейсами, чтобы быстрее дорасти до уровня middle и
                            senior.</h4>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Inform;