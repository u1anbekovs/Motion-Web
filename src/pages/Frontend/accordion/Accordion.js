import React, {useState} from 'react';
import img1 from "../../../image/frontEnd/img1.png";
import {MdKeyboardArrowDown} from "react-icons/md";
import img2 from "../../../image/frontEnd/img2Star.png";
import img3 from "../../../image/frontEnd/img3.png";
import img4 from "../../../image/frontEnd/img4.png";
import img5 from "../../../image/frontEnd/img5.png";
import './Accordion.scss'
const Accordion = () => {

    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)
    const [selected5, setSelected5] = useState(false)

    return (
        <div id="bg">
            <div className="container">
                <div className="accordionFront">
                    <div className="accord" onClick={() => {
                        setSelected(!selected)
                        setSelected2(false)
                        setSelected3(false)
                        setSelected4(false)
                        setSelected5(false)
                    }} style={{height: selected ? '635px' : '', transition: '1s',}}>
                        <div className="accord--leftBlock">
                            <img src={img1} alt=""/>
                            <h2>Основы UX дизайна</h2>
                        </div>

                        <div className="accord--rightBlock">
                            <MdKeyboardArrowDown
                                style={{transform: selected ? "rotate(180deg)" : ""}}/>
                        </div>
                    </div>

                    <div className="accord" onClick={() => {
                        setSelected2(!selected2)
                        setSelected(false)
                        setSelected3(false)
                        setSelected4(false)

                        setSelected5(false)
                    }} style={{height: selected2 ? '635px' : '', transition: '1s'}}>
                        <div className="accord--leftBlock">
                            <img src={img2} alt=""/>
                            <h2>Landing page</h2>
                        </div>
                        <div className="accord--rightBlock">
                            <MdKeyboardArrowDown className='ml-12'
                                                 style={{transform: selected ? "rotate(180deg)" : ""}}/>
                        </div>
                    </div>
                    <div className="accord" onClick={() => {
                        setSelected3(!selected3)
                        setSelected(false)
                        setSelected2(false)
                        setSelected4(false)
                        setSelected5(false)
                    }} style={{height: selected3 ? '635px' : '', transition: '1s'}}>
                        <div className="accord--leftBlock">
                            <img src={img3} alt=""/>
                            <h2>Интернет-магазин</h2>
                        </div>
                        <div className="accord--rightBlock">
                            <MdKeyboardArrowDown className='ml-3'
                                                 style={{transform: selected ? "rotate(180deg)" : ""}}/>
                        </div>
                    </div>
                    <div className="accord" onClick={() => {
                        setSelected4(!selected4)
                        setSelected5(false)
                        setSelected3(false)
                        setSelected2(false)
                        setSelected(false)
                    }} style={{height: selected4 ? '635px' : '', transition: '1s'}}>
                        <div className="accord--leftBlock">
                            <img src={img4} alt=""/>
                            <h2>Упаковка портфолио</h2>
                        </div>
                        <div className="accord--rightBlock">
                            <MdKeyboardArrowDown
                                style={{transform: selected ? "rotate(180deg)" : ""}}/>
                        </div>
                    </div>
                    <div className="accord" onClick={() => {
                        setSelected5(!selected5)
                        setSelected4(false)
                        setSelected3(false)
                        setSelected2(false)
                        setSelected(false)
                    }} style={{height: selected5 ? '635px' : '', transition: '1s'}}>
                        <div className="accord--leftBlock">
                            <img src={img5} alt=""/>
                            <h2>Упаковка портфолио</h2>
                        </div>
                        <div className="accord--rightBlock">
                            <MdKeyboardArrowDown
                                style={{transform: selected ? "rotate(180deg)" : ""}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Accordion;