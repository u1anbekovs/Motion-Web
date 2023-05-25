import React from 'react';
import "./../../../style/main/Project.scss"
import studentImg4 from "./../../../image/main/project5.svg"
import studentImg5 from "./../../../image/main/project6.svg"
import res from '../../../image/main/res.png'
import books from '../../../image/main/books.png'
import Bookshop from '../../../image/main/Bookshop.png'
import platform from '../../../image/main/platform.png'
import menu from '../../../image/main/Frame.png'
import menu2 from '../../../image/main/Frame 2.png'
import menu3 from '../../../image/main/Frame 3.png'
import {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Student = () => {
    const {t} = useTranslation()
    const [student, setStudent] = useState(false)
    return (
        <section id="student">
            <div className="container">

                <div className="student">
                    <div className="student--text">
                        <h3>{t("text35")}</h3>
                        <h1>MOTION WEB <br className='student--text__tt' /> IT ACADEMY</h1>
                    </div>

                    <Link to={'https://books-f8nq-git-aas-orozaliev0.vercel.app/'}>
                        <img src={Bookshop  }  className='student--img2' alt=""/>
                    </Link>
                    <Link to={'https://restaurant1-three.vercel.app'}>

                        <img className='student--img1' src={books} alt=""/>
                    </Link>
                    <img className='student--img3' src={platform} alt=""/>
                 <Link to={'https://menu-rosy-three.vercel.app/'}>
                     <div className='student--menu'>
                         <img src={menu} alt=""/>
                         <img src={menu2} alt=""/>
                         <img src={menu3} alt=""/>
                     </div>
                 </Link>
                    {
                        student ? <img  className='student--img4'  src={studentImg5} alt=""/> : ""
                    }
                    {
                        student ? <img  className='student--img6'  src={res} alt=""/> : ""
                    }
                    {
                        student ? <img  className='student--img5'  src={studentImg4} alt=""/> : ""
                    }

                    <p onClick={() => setStudent(!student)}>{student ? t("text37") : t("text36")}</p>

                </div>
            </div>
        </section>
    );
};

export default Student;
