import React from 'react';
import mentorRight from "../../../image/frontEnd/mentorRight.png";
import mentorCenter from "../../../image/frontEnd/mentorCenter.png";
import mentorLeft from "../../../image/frontEnd/mentorLeft.png";
import './mentor.scss'
import Slider from "react-slick";



const Mentor = () => {


    return (
        <div id="mentor">
            <div className="container">
                <div className="mentor">
                    <div className="mentor--title">
                        <h2>Лучшие менторы</h2><br/>
                        <h3>по всему Кыргызстану</h3>
                    </div>
                    <div className="mentor--boys">
                            <div className="mentor--boys__first">
                                <img src={mentorRight} alt=""/>
                                <h3>Ахырхан Кайратов</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                            <div className="mentor--boys__first">
                                <img src={mentorCenter} alt=""/>
                                <h3>Юля Гавриенко</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>Алишер Бекназаров</h3>
                                <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                    фрилансе. <br/>На
                                    счёту 200+ успешных проектов.</p>
                            </div>

                    </div>
                   
                    <div className="mentor--connection">
                        <div className="mentor--connection__text">
                            <h2>Самая оперативная <br/>и качественная <br/>обратная связь</h2>
                            <p>Наши менторы дают подробный <br/>разбор ваших работ, отмечают <br/>ошибки
                                и помогают
                                их исправить.</p>
                        </div>
                        <div className="mentor--connection__video">
                            <iframe className="video" src="https://www.youtube.com/embed/7VerRJwJP0s"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                            <iframe className="video" src="https://www.youtube.com/embed/H0ZTsv4ljcE"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                            </iframe>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Mentor;