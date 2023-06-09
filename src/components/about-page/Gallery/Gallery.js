import React, {useState} from 'react';
import './Gallery.scss'
import img1 from "../../../image/about-us/gallery1.svg"
import img2 from "../../../image/about-us/gallery2.svg"
import img3 from "../../../image/about-us/image 11.svg"
import img4 from "../../../image/about-us/image 12.svg"
import img5 from "../../../image/about-us/partne.svg"
import img6 from "../../../image/about-us/Vector.svg"
import img7 from "../../../image/about-us/partner-2svg.svg"
import {useTranslation} from "react-i18next";

const Gallery = () => {
    const {t} = useTranslation()
    const [block, setBlock] = useState(false)

    return (
        <section id="call">
            <div className="container">

                <div className="call">
                    <h1 className="call--title">{t("text65")}</h1>
                    <img src={img1} alt=""/>
                    <img src={img2} className="call--img2" alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} className="call--img4" alt=""/>


                    {
                        block ?  <img src={img4} className="call--img4" alt=""/> : ""
                    }{
                    block? <img src={img4} className="call--img4" alt=""/> : ""
                }{
                    block ? <img src={img4} className="call--img4" alt=""/> : ""
                }
                    <p className="call--desc" onClick={() => setBlock(!block)}>{block ? "Свернуть" : "Показать еще"}</p>
                </div>

                <div className="call--images">
                    <img src={img1} alt=""/>
                    <img src={img2} className="call--img2" alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} className="call--img4" alt=""/>
                    {
                        block ?  <img src={img4} className="call--img4" alt=""/> : ""
                    }{
                    block? <img src={img4} className="call--img4" alt=""/> : ""
                }{
                    block ? <img src={img4} className="call--img4" alt=""/> : ""
                }
                </div>
            </div>

            <div className="call--boxes">
                <div>
                    <img src={img5} alt=""/>
                </div>
                <div>
                    <img src={img6} alt=""/>
                </div>
                <div>
                    <img src={img7} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;