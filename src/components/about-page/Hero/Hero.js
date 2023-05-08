import React from 'react';
import '../../../style/aboutUs/Hero.scss'
import an1 from "../../../image/main/an1.png";
import an4 from "../../../image/main/an4.png";
import an6 from "../../../image/main/an5.png";
import an7 from "../../../image/main/an7.png";
import an3 from "../../../image/main/an3.png";
import an2 from "../../../image/main/an2.png";
import an11 from "../../../image/main/an11.png";
import an13 from "../../../image/main/an13.png";
import an8 from "../../../image/main/an8.png";
import an10 from "../../../image/main/an10.png";
import an9 from "../../../image/main/an9.png";
import an1media from "../../../image/main/an1media.png";
import an3media from "../../../image/main/an3media.png";
import an4media from "../../../image/main/an4media.png";
import an5media from "../../../image/main/an5media.png";

const Hero = () => {
    return (
        <div id="mainPart">
            <div className='title'>
                <h1 style={{
                    lineHeight: '140px',
                    paddingTop: '190px'
                }}>Кто мы- <br/> <span style={{
                    color: '#EC3025',
                }}>Motion Web</span>?</h1>
                <p>Motion Web IT academy — это международный образовательный <br/> проект, который готовит специалистов-практиков IT сферы.</p>
            </div>
            <div className="mainPart">
                <div className="an1">
                    <img src={an1} alt=""/>
                </div>
                <div className="an4">
                    <img src={an4} alt=""/>
                </div>
                <div className="an6">
                    <img src={an6} alt=""/>
                </div>
                <div className="an7">
                    <img src={an7} alt=""/>
                </div>
                <div className="an5">
                    <img src={an6} alt=""/>
                </div>
                <div className="an3">
                    <img src={an3} alt=""/>
                </div>
                <div className="an2">
                    <img src={an2} alt=""/>
                </div>
                <div className="an11">
                    <img src={an11} alt=""/>
                </div>
                <div className="an12">
                    <img src={an13} alt=""/>
                </div>
                <div className="an8">
                    <img src={an8} alt=""/>
                </div>
                <div className="an10">
                    <img src={an10} alt=""/>
                </div>
                <div className="an9">
                    <img src={an9} alt=""/>
                </div>


                <div className="an1media">
                    <img src={an1media} alt=""/>
                </div>

                <div className="an3media">
                    <img src={an3media} alt=""/>
                </div>
                <div className="an4media">
                    <img src={an4media} alt=""/>
                </div>
                <div className="an5media">
                    <img src={an5media} alt=""/>
                </div>
                <div className="media91"></div>
                <div className="media56"></div>
                <div className="media80"></div>
                <div className="media38"></div>
                <div className="media62"></div>
                <div className="media33"></div>
                <div className="media110"></div>
                <div className="media88"></div>
                <div className="media54"></div>
                <div className="backdropBlur"></div>

            </div>
        </div>
    );
};

export default Hero;