import React from 'react';
import Card from "../../../image/frontEnd/designer.png";
import './designer.scss'

const Desiginer = () => {

    return (
        <div id="designer">
            <div className="container">
                <div className="designer">
                    <div className="designer--choose">
                        <h2>Сделай свой первый дизайн</h2> <br/>
                        <p>Оставляй зявку и БЕСПЛАТНО получи пробный урок</p>
                    </div>
                    <div className="designer--fon">
                        <img src={Card} alt=""/>
                        <div className="designer--fon__application">
                            <form>
                                <input type="text" placeholder="Имя"/>
                            </form>
                            <form>
                                <input type="text" placeholder="Номер"/>
                            </form>
                            <div className="designer--fon__application--checked">
                                <input type="checkbox" className="input"/>
                                <p>Я соглашаюсь на обработку персональных данных</p>

                            </div>
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Desiginer;