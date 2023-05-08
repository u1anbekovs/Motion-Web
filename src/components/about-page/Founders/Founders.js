import React from 'react';
import '../../../style/aboutUs/Founders.scss'
import imgFound1 from "../../../image/about-us/image 6.svg"
import imgFound2 from "../../../image/about-us/image 7.svg"

const Founders = () => {
    return (
        <section id="found">
            <div className="container">
                <div className="found">
                    <div>
                        <h1 className="found--title">Основатели</h1>
                        <p className="found--desc">Motion web IT академия была <br/>
                            основана в апреле 2021 года <br/>
                            по инициативе Курманбека <br/> Жоошбаева и Аскерова Канатбека</p>
                    </div>

                    <div className="found--images">
                        <div>
                            <img src={imgFound1} className="found--img1" alt=""/>
                            <h3 className="found--title2">Курманбек Жоошбаев</h3>
                            <p className="found--desc2">Основатель</p>
                        </div>
                        <div>
                            <img src={imgFound2} className="found--img2" alt=""/>
                            <h3 className="found--title2">Канатбек Аскеров</h3>
                            <p className="found--desc2">Сооснователь</p>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default Founders;