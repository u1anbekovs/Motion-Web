import React from 'react';
import "./../../../style/main/Project.scss"
import studentImg from "./../../../image/main/project1.svg"
import studentImg1 from "./../../../image/main/project2.svg"
import studentImg2 from "./../../../image/main/project3.svg"
import studentImg3 from "./../../../image/main/project4.svg"
import studentImg4 from "./../../../image/main/project5.svg"
import studentImg5 from "./../../../image/main/project6.svg"
import studentImg6 from "./../../../image/main/project7.svg"
import {useState} from "react";

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
                    <img src={studentImg} alt=""/>
                    <img src={studentImg1} alt=""/>
                    <img src={studentImg2} alt=""/>
                    <img src={studentImg3} alt=""/>
                    {
                        student ? <img src={studentImg6} alt=""/> : ""
                    }
                    {
                        student ? <img src={studentImg4} alt=""/> : ""
                    }
                    {
                        student ? <img src={studentImg5} alt=""/> : ""
                    }

                    <p onClick={() => setStudent(!student)}>{student ? "Свернуть" : "Показать ещё"}</p>

                </div>
            </div>
        </section>
    );
};

export default Student;
