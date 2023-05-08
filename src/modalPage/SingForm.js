import React from 'react';
import "../style/main/Last.scss"
import last from "../image/main/smiling-face 2.svg"

const SingForm = () => {
    return (
        <section id="application">
            <div className="container">
                <div className="application">

                    <div className="application--text">
                        <h1>Оставить заявку на обучение <br/> или получить консультацию</h1>
                        <p>Менеджер свяжется с вами в течение 30 минут <br/> и ответит на все интересующие вопросы.</p>
                    </div>

                    <div className="application--img">
                        <img src={last} alt=""/>
                        <p>Менеджер скоро свяжется с вами</p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default SingForm;