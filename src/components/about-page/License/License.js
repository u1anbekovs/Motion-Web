import React from 'react';
import '../../../style/aboutUs/License.scss'
import img from "../../../image/about-us/image 9.svg"
const License = () => {
    return (
        <section id="list">
            <div className="container">
                <div className="list">
                    <div>
                        <div>
                            <h1 className="list--title">Наша лицензия</h1>
                            <p className="list--desc">Наша программа по IT прошла проверку <br/>
                                в Министерстве образования КР, <br/> что доказывает Motion web имеет право на:</p>
                        </div>
                        <div className="list--block">
                            <h1 className="list--number">01.</h1>
                            <h2 className="list--title2">Обучать IT</h2>
                        </div>
                        <div className="list--line"></div>
                        <div className="list--block">
                            <h1 className="list--number">02.</h1>
                            <h2 className="list--title2">Направлять на обучение <br/> и стажировку за границу</h2>
                        </div>
                        <div className="list--line"></div>
                    </div>
                    <img src={img} className="list--img1" alt=""/>
                </div>
            </div>

        </section>
    );
};

export default License;