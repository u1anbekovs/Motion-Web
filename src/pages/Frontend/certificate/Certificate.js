import React from 'react';
import img from "../../../image/frontEnd/certificate.png"
import './certificate.scss'

const Certificate = () => {
    return (
        <div id="certificate">
            <div className="container">
                <div className="certificate">
                    <div className="certificate--text">
                        <h3>Сертификат</h3>
                        <h6>После успешного завершения обучения выдаётся <br/>международный
                            сертификат
                            Государственной <br/>степени, лицензированный Министерством <br/>образования
                            на 3
                            языках.</h6>
                        <div className="certificate--text__buttons">
                            <button>Кыргызский</button>
                            <button>Русский</button>
                            <button>Английский</button>
                        </div>
                        <h6>Действителен для всех госучреждений, <br/>IT компаний в Кыргызстане и IT
                            компаний <br/>в европейских государствах</h6>
                    </div>
                    <div className="certificate--img">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;