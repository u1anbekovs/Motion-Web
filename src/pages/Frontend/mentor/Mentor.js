import React from 'react';
import mentorRight from "../../../image/frontEnd/mentorRight.png";
import mentorCenter from "../../../image/frontEnd/mentorCenter.png";
import mentorLeft from "../../../image/frontEnd/mentorLeft.png";
import './mentor.scss'
import Slider from "react-slick";
import SliderIcon1 from "../../../image/main/check1.svg"
import SliderIcon2 from "../../../image/main/check.svg"
import {useTranslation} from "react-i18next";


const Mentor = () => {
    const {t} = useTranslation()
    let settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 320,
                settings : {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            }
        ]
    };

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // };
    return (
        <div id="mentor">
            <div className="container">
                <div className="mentor">
                    <div className="mentor--title">
                        <h2>{t("text131")}</h2><br/>
                        <h3>{t("text132")}</h3>
                    </div>

                    <Slider {...settings}>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorRight} alt=""/>
                                <h3>{t("text133")}</h3>
                                <p>{t("text134")}</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorCenter} alt=""/>
                                <h3>{t("text135")}</h3>
                                <p>{t("text134")}</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>{t("text136")}</h3>
                                <p>{t("text134")}</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>{t("text136")}</h3>
                                <p>{t("text134")}</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">
                            <div className="mentor--boys__first">
                                <img src={mentorLeft} alt=""/>
                                <h3>{t("text136")}</h3>
                                <p>{t("text134")}</p>
                            </div>
                        </div>
                        <div className="mentor--blocks">

                            <div className="mentor--boys__first">
                                <img src={mentorRight} alt=""/>
                                <h3>{t('text133')}</h3>
                                <p>{t("text134")}</p>
                            </div>
                        </div>
                    </Slider>

                    <div className="mentor--connection">
                        <div className="mentor--connection__text">
                            <h2>{t("text109")}</h2>
                            <p>{t("text137")}</p>
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