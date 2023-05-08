import React from 'react';
import "./../../../style/main/Slick.scss"
import Slider from "react-slick";
import slideImg from "./../../../image/main/видео.svg"
import SliderIcon2 from "./../../../image/main/check.svg"
import SliderIcon1 from "./../../../image/main/check1.svg"

const Slide = () => {

    const settings = {
        slidesToShow: 2.5,
        prevArrow: <img src={SliderIcon2} alt=""/>,
        nextArrow: <img src={SliderIcon1} alt=""/>,
    };

    return (
        <section id="slide">
            <div className="slide">
                <h1>Отзывы студентов</h1>
                <div className="slide--sliders">
                    <Slider {...settings}>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                        <div>
                            <img src={slideImg} alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Slide;