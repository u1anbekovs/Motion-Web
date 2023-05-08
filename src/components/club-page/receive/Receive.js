import React from 'react';
import "./../../../style/it-club/Receive.scss"
import it from "./../../../image/it-club/it.svg"
import girl from "./../../../image/it-club/girl.svg"
import book from "./../../../image/it-club/book.svg"
import pers from "./../../../image/it-club/pers.svg"
import sound from "./../../../image/it-club/sound.svg"
import laptop from "./../../../image/it-club/laptop.svg"
import negr from "./../../../image/it-club/negr.svg"

const Receive = () => {
    return (
        <div id="second">
            <div className="container">
                <div className="second">
                    <h1>Что вы <br/> получите</h1>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={it} alt=""/>
                        </div>
                        <p>Расширение кругозоров в сфере IT</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={girl} alt=""/>
                            <img src={book} alt=""/>
                        </div>
                        <p>Улучшение английского языка</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={pers} alt=""/>
                        </div>
                        <p>Работа с командой</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={sound} alt=""/>
                        </div>
                        <p>Портфолио</p>
                    </div>
                    <div className="second--block">
                        <div className="second--block__img">
                            <img src={laptop} alt=""/>
                            <img src={negr} alt=""/>
                        </div>
                        <p>Работа с реальными проектами</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receive;