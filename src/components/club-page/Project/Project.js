import React from "react";
import {Link} from "react-router-dom";
import "../../../style/it-club/Project.scss"
import persons from "../../../image/it-club/persons.svg";
import one from "../../../image/it-club/black-one.svg"
import nine from "../../../image/it-club/black-nine.svg"
import ani1 from '../../../image/it-club/ani1.png'
import ani2 from '../../../image/it-club/ani2.png'
import ani3 from '../../../image/it-club/ani3.png'
import ani4 from '../../../image/it-club/ani4.png'
import ani5 from '../../../image/it-club/ani5.png'


const Project = () => {


    return (
        <section id="project">
            <div className="container">
                <div className="project">

                    <div className="project--load">
                        <h1>Команда</h1>
                        <div>
                            <img className="project--load__any1" src={one} alt=""/>
                            <img className="project--load__any2" src={nine} alt=""/>
                            <img className="project--load__any3" src={ani1} alt=""/>
                            <img className="project--load__any4" src={ani2} alt=""/>
                            <img className="project--load__any5" src={ani3} alt=""/>
                            <img className="project--load__any6" src={ani4} alt=""/>
                            <img className="project--load__any7" src={ani5} alt=""/>
                        </div>
                        <img className="project--load__image" src={persons} alt=""/>
                        <div className="project--load__block">
                            <h2>Frontend</h2>
                            <h2>UI/UX designer</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Project;