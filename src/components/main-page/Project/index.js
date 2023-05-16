import React from 'react';
import "./../../../style/main/Project.scss"
import studentImg from "./../../../image/main/project1.svg"
import studentImg1 from "./../../../image/main/project2.svg"
import studentImg2 from "./../../../image/main/project3.svg"
import studentImg3 from "./../../../image/main/project4.svg"
import studentImg4 from "./../../../image/main/project5.svg"
import studentImg5 from "./../../../image/main/project6.svg"
import studentImg6 from "./../../../image/main/project7.svg"
import res from '../../../image/main/res.png'
import books from '../../../image/main/books.png'
import Bookshop from '../../../image/main/Bookshop.png'
import platform from '../../../image/main/platform.png'
import menu from '../../../image/main/Frame.png'
import menu2 from '../../../image/main/Frame 2.png'
import menu3 from '../../../image/main/Frame 3.png'
import {useState} from "react";
import {Link} from "react-router-dom";

const Student = () => {
    const [student, setStudent] = useState(false)
    return (
        <section id="student">
            <div className="container">
                <div className="student">
                    <div className="student--text">
                        <h3>Проекты студентов</h3>
                        <h1>MOTIN WEB <br/> IT ACADEMY</h1>
                    </div>
                    <Link to={'https://restaurant1-three.vercel.app'}>
                        <img className='student--img1' src={res} alt=""/>
                    </Link>
                    <Link to={'https://books-f8nq-git-aas-orozaliev0.vercel.app/'}>
                        <img src={books}  className='student--img2' alt=""/>
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
                        student ? <img  className='student--img4'  src={Bookshop} alt=""/> : ""
                    }
                    {
                        student ? <img  className='student--img6'  src={studentImg4} alt=""/> : ""
                    }
                    {
                        student ? <img  className='student--img5'  src={studentImg5} alt=""/> : ""
                    }

                    <p onClick={() => setStudent(!student)}>{student ? "Свернуть" : "Показать ещё"}</p>

                </div>
            </div>
        </section>
    );
};

export default Student;
