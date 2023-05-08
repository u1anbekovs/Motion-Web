import React from 'react';
import "./../../style/main/Footer.scss"
import logoFooter from "../../image/main/logo.svg.png"
import {ImLinkedin2} from "react-icons/im"
import {FaInstagram} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import {useNavigate} from "react-router";

const Footer = () => {

    const navigate = useNavigate()

    return (
        <section id="footer">
            <div className="container">
                <div className="footer">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1720.2631806457582!2d74.58418417706817!3d42.8675668974119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec825790b32f5%3A0x7545c2a8e37ec365!2zMTA5LzMg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6IDcyMDAwMQ!5e0!3m2!1sru!2skg!4v1682672756463!5m2!1sru!2skg"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <div className="footer--uses">

                        <div className="footer--uses__group">
                            <img src={logoFooter} alt=""/>
                            <div className="footer--uses__group--icons">
                                <div className="footer--uses__group--icons__8com">
                                    <a href="#"><ImLinkedin2/></a>
                                    <a href="https://instagram.com/motion_web?igshid=YmMyMTA2M2Y="><FaInstagram/></a>
                                    <a href="#"><FaTelegram/></a>
                                    <a href="https://youtube.com/@motionwebllc683"><AiFillYoutube/></a>
                                </div>
                                <a href="https://icons8.com/">Icons8.com</a>
                            </div>
                        </div>

                        <table>
                            <tr>
                                <th>Курсы</th>
                                <td onClick={() => navigate(`/MainFr`) || window.scroll(0, 0)}>Frontend</td>
                                <td onClick={() => navigate(`/UxUi`) || window.scroll(0, 0)}>UI/UX design</td>
                                <td onClick={() => navigate(`/backend`) || window.scroll(0, 0)}>Backend</td>
                            </tr>
                            <tr>
                                <th onClick={() => navigate(`/about_us`) || window.scroll(0, 0)}>О нас</th>
                                <th onClick={() => navigate(`/it_club`) || window.scroll(0, 0)}>Клуб</th>
                                <th onClick={() => navigate(`/`)}>FAQ</th>
                            </tr>
                            <td>
                                <a href="tel:">+996 700 232 400</a>
                                <a href="mailto:motionweb312@gmail.com">motionweb312@gmail.com</a>
                                <a href="https://www.google.com/maps/place/109%2F3+%D1%83%D0%BB.+%D0%A2%D1%83%D1%80%D1%83%D1%81%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2%D0%B0,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA+720001/@42.8675064,74.5842041,17.94z/data=!4m6!3m5!1s0x389ec825790b32f5:0x7545c2a8e37ec365!8m2!3d42.8675102!4d74.5841322!16s%2Fg%2F11sfgczm9s">г.Бишкек
                                    ул.Турусбекова 109/3</a>
                            </td>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;