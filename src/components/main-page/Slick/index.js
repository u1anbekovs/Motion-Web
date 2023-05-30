import React from 'react';
import "./Slick.scss"
import Slider from "react-slick";
import slideImg from "./../../../image/main/видео.svg"
import SliderIcon2 from "./../../../image/main/check.svg"
import SliderIcon1 from "./../../../image/main/check1.svg"
import {useTranslation} from "react-i18next";

const Slide = () => {

    const {t} = useTranslation()

    const settings = {
        slidesToShow: 2.5,
        prevArrow: <img src={SliderIcon2} alt=""/>,
        nextArrow: <img src={SliderIcon1} alt=""/>,
    };

    return (

        <section id="slide">
            <div className="slide">
                <h1>{t("text38")}</h1>
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