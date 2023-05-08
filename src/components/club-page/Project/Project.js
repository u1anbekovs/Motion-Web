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
        <>
            <div id="project">
                <div className="container">
                    <div className="project">
                        <div className="project--txt">
                            <span>Команда</span>
                        </div>
                        <div className="project--lead">
                            <img className="project--lead__persons" src={persons} alt=""/>
                            <div className="project--lead__block">

                                <div className="project--lead__block--txt">
                                    <Link to={"/MainFr"}>
                                        <span>Frontend</span>
                                    </Link>
                                    <Link tp={"/UxUi"}>
                                        <span>UI/UX designer</span>
                                    </Link>
                                    <Link to={"/backend"}>
                                        <span>Backend</span>
                                    </Link>
                                </div>

                                <img className="project--lead__block__one" src={one} alt=""/>
                                <img className="project--lead__block__nine" src={nine} alt=""/>
                            </div>

                            <div>
                                <img className='project--lead__ani1' src={ani1} alt="img"/>
                                <img className='project--lead__ani2' src={ani2} alt="img"/>
                                <img className='project--lead__ani3' src={ani3} alt="img"/>
                                <img className='project--lead__ani4' src={ani4} alt="img" style={{
                                    zIndex: -45
                                }}/>
                                <img className='project--lead__ani5' src={ani5} alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;