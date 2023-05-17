import React, {useState} from 'react';
import img1 from "../../../image/frontEnd/img1.png";
import {MdKeyboardArrowDown} from "react-icons/md";
import img2 from "../../../image/frontEnd/img2Star.png";
import img3 from "../../../image/frontEnd/img3.png";
import img4 from "../../../image/frontEnd/img4.png";
import img5 from "../../../image/frontEnd/img5.png";
import different from '../../../image/frontEnd/different.png'
import './Accordion.scss'



const Accordion = () => {

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
                                        <h1>Landing page</h1>
                                    </div>
                                    <MdKeyboardArrowDown   className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>

                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
                                    </p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>Задачи и навыки UX/UI дизайнера </li>

                                        <li> Психология пользователя
                                        </li>
                                        <li>    Работа с Figma (Начало)</li>
                                        <li> Базовый стиль</li>
                                        <li>   Развитие насмотренности</li>
                                        <li> Элементы интерфейса / Компоненты сайта</li>
                                        <li>  Логика интерфейса</li>
                                        <li>  Принципы навигации</li>
                                        <li>Исследования</li>

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
                                        <h1>Основы UX дизайна</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected2 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
                                    </p>
                                    <div className="accordion--type__folower__this--those__that">

                                        <li>Задачи и навыки UX/UI дизайнера </li>

                                        <li> Психология пользователя
                                        </li>
                                        <li>    Работа с Figma (Начало)</li>
                                        <li> Базовый стиль</li>
                                        <li>   Развитие насмотренности</li>
                                        <li> Элементы интерфейса / Компоненты сайта</li>
                                        <li>  Логика интерфейса</li>
                                        <li>  Принципы навигации</li>
                                        <li>Исследования</li>

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
                                        <h1>Landing page</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected3 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
                                    </p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>Задачи и навыки UX/UI дизайнера </li>

                                        <li> Психология пользователя
                                        </li>
                                        <li>    Работа с Figma (Начало)</li>
                                        <li> Базовый стиль</li>
                                        <li>   Развитие насмотренности</li>
                                        <li> Элементы интерфейса / Компоненты сайта</li>
                                        <li>  Логика интерфейса</li>
                                        <li>  Принципы навигации</li>
                                        <li>Исследования</li>

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
                                        <h1>Упаковка портфолио</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected4 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
                                    </p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>Задачи и навыки UX/UI дизайнера </li>

                                        <li> Психология пользователя
                                        </li>
                                        <li>    Работа с Figma (Начало)</li>
                                        <li> Базовый стиль</li>
                                        <li>   Развитие насмотренности</li>
                                        <li> Элементы интерфейса / Компоненты сайта</li>
                                        <li>  Логика интерфейса</li>
                                        <li>  Принципы навигации</li>
                                        <li>Исследования</li>

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
                                        <h1>Экзамен</h1>
                                    </div>
                                    <MdKeyboardArrowDown  className="accordion--type__folower--folower2__folower3--icon" style={{transform:selected5 ? 'rotate(182deg)': 'rotate(1deg)'}} />

                                </div>


                            </div>
                            <div className="accordion--type__folower--this">
                                <div className="accordion--type__folower--this__those">
                                    <p>В этом модуле вы получите представление о том, в чем разница между UX и UI, а также почему они неразрывно связаны между собой. Мы обсудим, что такое интерфейс и затронем тему классификации дизайна и сайтов. Вы узнаете, какими принципами и в каком порядке важно руководствоваться в процессе проектирования, получите представление о том, как пользователи обрабатывают данные, изучите приёмы управления их вниманием и эмоциями. Научитесь работать в графическом редакторе Figma и пройдёте первые этапы погружения в UX/UI-дизайн.
                                    </p>
                                    <div className="accordion--type__folower__this--those__that">
                                        <li>Задачи и навыки UX/UI дизайнера </li>

                                        <li> Психология пользователя
                                        </li>
                                        <li>    Работа с Figma (Начало)</li>
                                        <li> Базовый стиль</li>
                                        <li>   Развитие насмотренности</li>
                                        <li> Элементы интерфейса / Компоненты сайта</li>
                                        <li>  Логика интерфейса</li>
                                        <li>  Принципы навигации</li>
                                        <li>Исследования</li>

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
