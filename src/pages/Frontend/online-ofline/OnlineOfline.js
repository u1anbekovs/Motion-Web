import React, {useState} from 'react';
import './onlineOf.scss'

const OnlineOfline = () => {
    const [choose, SetChoose] = useState(false)
    const [choose2, SetChoose2] = useState(false)

    return (
            <div id="OnlineOfline">
                <div className="container">
                        <div className="OnOf">
                            <button style={{transform: "3s"}} onClick={() => SetChoose(!choose)}>Офлайн</button>
                            <button onClick={() => SetChoose2(!choose2)}>Онлайн</button>

                            <div className="OnOf--ofline">
                                <div style={{
                                    display: choose ? "block" : "none",
                                    transition: choose ? "3s" : "0", backdropFilter: 'blur(10px)',
                                    marginLeft: '-958px'
                                }} onClick={() => SetChoose(!choose)} className='OnOf--ofline__first'>
                                    <div className="OnOf--ofline__first--three">
                                        <h1>Офлайн</h1>
                                        <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.</li>
                                        <li>Занятия будут проходить на кыргызском языке.</li>
                                        <li>В Академии есть возможность практиковать внеклассное обучение в период с 09 до 22
                                            (OPEN SPACE).
                                        </li>

                                    </div>
                                </div>

                                <div style={{
                                    display: choose2 ? "block" : "none",
                                    transition: choose2 ? "3s" : "0", backdropFilter: 'blur(10px)',
                                    marginLeft: '-958px'
                                }} onClick={() => SetChoose2(!choose2)} className='OnOf--ofline__for'>
                                    <div className="OnOf--ofline__first--three">
                                        <h1>Онлайн</h1>
                                        <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.</li>
                                        <li>Занятия будут проходить на кыргызском языке.</li>
                                        <li>Телеграм, ZOOM</li>
                                        <li>Быстрая и оперативная обратная связь от менторов</li>

                                    </div>
                                </div>
                        <div onClick={() => SetChoose(!choose)} style={{display: choose ? "block" : "none"}} className="OnOf--window"></div>
                        <div  onClick={() => SetChoose2(!choose2)} style={{display: choose2 ? "block" : "none"}} className="OnOf--window2"></div>
                    </div>
                </div>


                    {/*    <div className='OnOf--ofline__first2'>*/}
                    {/*        <div className="OnOf--ofline__first--three">*/}
                    {/*            <h1>Офлайн</h1>*/}
                    {/*            <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.</li>*/}
                    {/*            <li>Занятия будут проходить на кыргызском языке.</li>*/}
                    {/*            <li>В Академии есть возможность практиковать внеклассное обучение в период с 09 до 22*/}
                    {/*                (OPEN SPACE).*/}
                    {/*            </li>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*<div  className='OnOf--ofline__for2'>*/}
                    {/*    <div className="OnOf--ofline__first--three">*/}
                    {/*        <h1>Онлайн</h1>*/}
                    {/*        <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.</li>*/}
                    {/*        <li>Занятия будут проходить на кыргызском языке.</li>*/}
                    {/*        <li>Телеграм, ZOOM</li>*/}
                    {/*        <li>Быстрая и оперативная обратная связь от менторов</li>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
    )

};

export default OnlineOfline;