import React, {useState} from 'react';
import img1 from "../../../image/frontEnd/img1.png";
import {MdKeyboardArrowDown} from "react-icons/md";
import img2 from "../../../image/frontEnd/img2Star.png";
import img3 from "../../../image/frontEnd/img3.png";
import img4 from "../../../image/frontEnd/img4.png";
import img5 from "../../../image/frontEnd/img5.png";
import different from '../../../image/frontEnd/different.png'
import './Accordion.scss'
import {useTranslation} from "react-i18next";



const Accordion = () => {

    const {t} = useTranslation()

    const [selected, setSelected] = useState(true)
    const [selected2, setSelected2] = useState(true)
    const [selected3, setSelected3] = useState(true)
    const [selected4, setSelected4] = useState(true)
    const [selected5, setSelected5] = useState(true)

    return (
        <div id="bg">
            <div className="container" >
                <div className="accordion">
                    <div className="accordion--type">
                        <div  onClick={()=> {
                            setSelected(!selected)
                            setSelected2(true)
                            setSelected3(true)
                            setSelected4(true)
                            setSelected5(true)
                        }}  style={{height: selected ? "70px": ""}} className="accordion--type__folower">
                            <div   className="accordion--type__folower--folower2">
                                <div className="accordion--type__folower--folower2__folower3">
                                    <div className="accordion--type__folower--folower2__folower3--folower4">
                                        <img className={'img'} src={img1} alt="img"/>
                                        <h1>{t("text140")}</h1>
                                    </div>
                                    <MdKeyboardArrowDown   className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>
                            </div>

                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>{t("text141")}</p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>{t("text142")}</li>
                                        <li>{t("text143")}</li>
                                        <li>{t("text144")}</li>
                                        <li>{t("text145")}</li>
                                        <li>{t("text146")}</li>
                                        <li>{t("text147")}</li>
                                        <li>{t("text148")}</li>
                                        <li>{t("text149")}</li>

                                    </div>
                                </div>
                                <img  className="accordion--type__folower--key"  src={different} alt="img"/>
                            </div>

                        </div>
                    </div>
                    <div className="accordion--type">
                        <div onClick={()=> {
                            setSelected2(!selected2)
                            setSelected(true)
                            setSelected3(true)
                            setSelected4(true)
                            setSelected5(true)
                        }}  style={{height: selected2 ? "70px": ""}} className="accordion--type__folower">
                            <div   className="accordion--type__folower--folower2">
                                <div className="accordion--type__folower--folower2__folower3">
                                    <div className="accordion--type__folower--folower2__folower3--folower4">
                                        <img className={'img'} src={img2} alt="img"/>
                                        <h1>{t("text150")}</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected2 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                   <p>{t("text141")}</p>
                                    <div className="accordion--type__folower__this--those__that">

                                        <li>{t("text142")} </li>

                                        <li>{t("text143")}</li>
                                        <li>{t("text144")}</li>
                                        <li>{t("text145")}</li>
                                        <li>{t("text146")}</li>
                                        <li>{t("text147")}</li>
                                        <li>{t("text148")}</li>
                                        <li>{t("text149")}</li>

                                    </div>
                                </div>
                                <img className="accordion--type__folower--key"  src={different} alt="img"/>



                            </div>

                        </div>
                    </div>
                    <div className="accordion--type">
                        <div  onClick={()=> {
                            setSelected3(!selected3)
                            setSelected2(true)
                            setSelected(true)
                            setSelected4(true)
                            setSelected5(true)
                        }} style={{height: selected3 ? "70px": ""}} className="accordion--type__folower">
                            <div onClick={()=> {
                                setSelected3(!selected3)
                            }}   className="accordion--type__folower--folower2">
                                <div className="accordion--type__folower--folower2__folower3">
                                    <div className="accordion--type__folower--folower2__folower3--folower4">
                                        <img className={'img'} src={img3} alt="img"/>
                                        <h1>{t("text140")}</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected3 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                   <p>{t("text141")}</p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>{t("text142")} </li>

                                        <li> {t("text143")}</li>
                                        <li>{t("text144")}</li>
                                        <li>{t("text145")}</li>
                                        <li>{t("text146")}</li>
                                        <li>{t("text147")}</li>
                                        <li>{t("text148")}</li>
                                        <li>{t("text149")}</li>

                                    </div>
                                </div>
                                <img className="accordion--type__folower--key"  src={different} alt="img"/>



                            </div>

                        </div>
                    </div>
                    <div className="accordion--type">
                        <div  onClick={()=> {
                            setSelected4(!selected4)
                            setSelected2(true)
                            setSelected3(true)
                            setSelected(true)
                            setSelected5(true)
                        }} style={{height: selected4 ? "70px": ""}} className="accordion--type__folower">
                            <div onClick={()=> {
                                setSelected4(!selected4)
                            }}   className="accordion--type__folower--folower2">
                                <div className="accordion--type__folower--folower2__folower3">
                                    <div className="accordion--type__folower--folower2__folower3--folower4">
                                        <img className={'img'} src={img4} alt="img"/>
                                        <h1>{t("text151")}</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected4 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>{t("text141")}</p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>{t("text142")} </li>

                                        <li>{t("text143")}</li>
                                        <li>{t("text144")}</li>
                                        <li>{t("text145")}</li>
                                        <li>{t("text146")}</li>
                                        <li>{t("text147")}</li>
                                        <li>{t("text148")}</li>
                                        <li>{t("text149")}</li>

                                    </div>
                                </div>
                                <img className="accordion--type__folower--key"  src={different} alt="img"/>



                            </div>

                        </div>
                    </div>
                    <div className="accordion--type">
                        <div  onClick={()=> {
                            setSelected5(!selected5)
                            setSelected2(true)
                            setSelected3(true)
                            setSelected4(true)
                            setSelected(true)
                        }} style={{height: selected5 ? "70px": ""}} className="accordion--type__folower">
                            <div   className="accordion--type__folower--folower2">
                                <div className="accordion--type__folower--folower2__folower3">
                                    <div className="accordion--type__folower--folower2__folower3--folower4">
                                        <img className={'img'} src={img5} alt="img"/>
                                        <h1>{t("text152")}</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected5 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>{t("text141")}</p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>{t("text142")} </li>

                                        <li>{t("text143")}</li>
                                        <li>{t("text144")}</li>
                                        <li>{t("text145")}</li>
                                        <li>{t("text146")}</li>
                                        <li>{t("text147")}</li>
                                        <li>{t("text148")}</li>
                                        <li>{t("text149")}</li>

                                    </div>
                                </div>
                                <img className="accordion--type__folower--key"  src={different} alt="img"/>



                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Accordion;
