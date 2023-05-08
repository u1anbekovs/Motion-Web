import React, {useState} from 'react';
import '../../../style/aboutUs/Gallery.scss'
import img1 from "../../../image/about-us/gallery1.svg"
import img2 from "../../../image/about-us/gallery2.svg"
import img3 from "../../../image/about-us/image 11.svg"
import img4 from "../../../image/about-us/image 12.svg"
import img5 from "../../../image/about-us/partne.svg"
import img6 from "../../../image/about-us/Vector.svg"
import img7 from "../../../image/about-us/partner-2svg.svg"
import Slider from "react-slick";

const Gallery = () => {
    const [block, setBlock] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <section id="call">
            <div className="container">
                <div className="call">
                    <div>
                        <h1 className="call--title">Галерея</h1>
                    </div>
                    <div className="call--images1">
                        <img src={img1} alt=""/>
                        <img src={img2} className="call--img2" alt=""/>
                    </div>
                </div>
                <div className="call--box">
                    <img src={img3} alt=""/>
                    <img src={img4} className="call--img4" alt=""/>

                    <span className="call--desc" onClick={() => setBlock(!block)} style={{
                        display: block ? "none" : ''
                    }}>Показать ещё</span>
                </div>

                {
                    block ?
                        <div className="call--slider"> <Slider {...settings}>
                            <div>
                                <img src={img3} alt=""/>
                            </div>
                            <div>
                                <img src={img4} alt=""/>
                            </div>
                            <div>
                                <img src={img3} alt=""/>
                            </div>
                            <div>
                                <img src={img4} alt=""/>
                            </div>
                            <div>
                                <img src={img3} alt=""/>
                            </div>
                            <div>
                                <img src={img4} alt=""/>
                            </div>

                        </Slider></div>
                        : ''
                }
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
//
// {
//     array.map((el) => (
//         <button onClick={() => setActive(active )}
//                 style={{
//                     padding: '10px 20px',
//                     borderRadius:"10px",
//                     background: "red",
//                     cursor:"pointer",
//                     color:"white",
//                     margin: "20px 15px 0 0"
//                 }}>{el}</button>
//     ))
// }