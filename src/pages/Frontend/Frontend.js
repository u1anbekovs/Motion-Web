import React, {useState} from "react";
import FirstImg from "../../image/frontEnd/first.png"
import secondImg from "../../image/frontEnd/second.png"
import thirdImg from "../../image/frontEnd/third.png"
import Certificate from "../../image/frontEnd/certificate.png"
import Card from "../../image/frontEnd/designer.png"
import mentorRight from "../../image/frontEnd/mentorRight.png"
import mentorCenter from "../../image/frontEnd/mentorCenter.png"
import mentorLeft from "../../image/frontEnd/mentorLeft.png"
import '../../style/pages/frontend.scss'
import img1 from '../../image/frontEnd/img1.png'
import img2 from '../../image/frontEnd/img2Star.png'
import img3 from '../../image/frontEnd/img3.png'
import img4 from '../../image/frontEnd/img4.png'
import img5 from '../../image/frontEnd/img5.png'
import {MdKeyboardArrowDown} from 'react-icons/md'


const Frontend = () => {

    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)
    const [selected5, setSelected5] = useState(false)
    const [choose, SetChoose] = useState(false)
    const [choose2, SetChoose2] = useState(false)

    return (
        <div id="frontEnd">
            <div className="frontEnd">
                <div className="container">


                    <div className="frontEnd--inform">
                        <div className="frontEnd--inform__question">

                            <h3>Почему <span>MOTIN WEB IT ACADEMY</span>?</h3>
                        </div>
                        <div className="frontEnd--inform__text">
                            <p>На данном курсе мы сконцентрируем внимание на сайтах и научим вас с нуля проектировать их
                                на уровне ведущих дизайн-студий.</p>

                            <h4>Наша программа построена таким образом, что уже через 3 месяца ваших знаний будет
                                достаточно для поиска работы на позицию junior-дизайнера. Параллельно вы продолжите
                                обучение, пополняя портфолио сильными кейсами, чтобы быстрее дорасти до уровня middle и
                                senior.</h4>

                        </div>
                    </div>

                    <div className="frontEnd--courses">
                        <h2>Кому подойдёт этот курс</h2>
                        <div className="frontEnd--courses__inform">
                            <div className="frontEnd--courses__inform--first">
                                <div className="frontEnd--courses__inform--first__fon">
                                    <img src={FirstImg} alt=""/>
                                </div>
                                <h3>Новичкам</h3>
                                <p>Научитесь с нуля разрабатывать интерфейсы. <br/>Узнаете, как с помощью дизайна
                                    направлять <br/>пользователей и решать задачи</p>

                            </div>
                            <div className="frontEnd--courses__inform--first">
                                <div className="frontEnd--courses__inform--first__fon">
                                    <img src={secondImg} alt=""/>
                                </div>
                                <h3>Junior-дизайнерам</h3>
                                <p>Научитесь с нуля разрабатывать интерфейсы. <br/>Узнаете, как с помощью дизайна
                                    направлять <br/>пользователей и решать задачи</p>


                            </div>
                            <div className="frontEnd--courses__inform--first">
                                <div className="frontEnd--courses__inform--first__fon">
                                    <img src={thirdImg} alt=""/>
                                </div>
                                <h3>Опытным дизайнерам</h3>
                                <p>Получите навыки в продуктовом и UX-<br/>дизайне, заполните пробелы в знаниях. <br/>Сможете
                                    создавать прототипы приложений и <br/> повысить стоимость своей работы</p>

                            </div>
                        </div>
                    </div>

                    <div className="frontEnd--title">
                        <div className="frontEnd--title__first">
                            <h1>3 месяца <br/> <span>Обучения</span></h1>
                        </div>
                        <div className="frontEnd--title__first">
                            <h1>3 раза <br/> <span>В неделю по 2 часа</span></h1>
                        </div>
                        <div className="frontEnd--title__first">
                            <h1>3 раза <br/> <span>Английский по 1 часу </span></h1>
                        </div>
                    </div>

                    <div className="frontEnd--buttons">
                        <button style={{transform: "3s"}} onClick={() => SetChoose(!choose)}>Офлайн</button>
                        <button onClick={() => SetChoose2(!choose2)}>Онлайн</button>

                        <div>

                        </div>
                    </div>
                    <div className="frontEnd--ofline">
                        <div style={{
                            display: choose ? "block" : "none",
                            transition: choose ? "3s" : "0", backdropFilter: 'blur(10px)'
                        }} onClick={() => SetChoose(!choose)} className='frontEnd--ofline__first'>
                            <div className="frontEnd--ofline__first--three">
                                <h1>Офлайн</h1>
                                <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.</li>
                                <li>Занятия будут проходить на кыргызском языке.</li>
                                <li>В Академии есть возможность практиковать внеклассное обучение в период с 09 до 22
                                    (OPEN SPACE).
                                </li>

                            </div>
                            <div className="frontEnd--bottom">
                                <div className="container">
                                    <div className="frontEnd--cours">
                                        <div className="frontEnd--cours__text">
                                            <h2>Что даст <br/>вам этот курс</h2>
                                        </div>
                                        <div className="frontEnd--cours__informs">
                                            <div className="frontEnd--cours__informs--first">
                                                <div className="frontEnd--cours__informs--first__title">
                                                    <h3>01.</h3>
                                                    <h3>Трудоустройство</h3>
                                                    <p>Мы помогаем студентам с высшим образованием <br/>(получившим
                                                        Золотой
                                                        сертификат) получить работу</p>
                                                </div>
                                                <hr/>
                                            </div>
                                            <div className="frontEnd--cours__informs--first">
                                                <div className="frontEnd--cours__informs--first__title">
                                                    <h3>02.</h3>
                                                    <h3>Английский</h3>
                                                    <p>Бесплатные уроки по английскому языку 3 раза <br/>в неделю. Это
                                                        поможет вам в
                                                        будущем работать <br/>с зарубежними проектами и компаниями</p>
                                                </div>
                                                <hr/>
                                            </div>

                                            <div className="frontEnd--cours__informs--first">
                                                <div className="frontEnd--cours__informs--first__title">
                                                    <h3>03.</h3>
                                                    <h3>Сильное портфолио</h3>
                                                    <p>Во время обучения создатиде 5+ проектов и упакуете <br/>своё
                                                        протфолио</p>
                                                </div>
                                                <hr/>
                                            </div>

                                            <div className="frontEnd--cours__informs--first">
                                                <div className="frontEnd--cours__informs--first__title">
                                                    <h3>04.</h3>
                                                    <h3>Поддержка</h3>
                                                    <p>Помимо тренера (ментора) помощь оказывается <br/>со стороны
                                                        SUPPORT</p>
                                                </div>
                                                <hr/>
                                            </div>
                                            <div className="frontEnd--cours__informs--first">
                                                <div className="frontEnd--cours__informs--first__title">
                                                    <h3>05.</h3>
                                                    <h3>Индивидуальное работа <br/>с каждым</h3>
                                                    <p>Наша система образования построена на то, <br/>чтобы делать упор
                                                        на сильные
                                                        стороны ученика <br/>и подходить к каждому индивидуально</p>
                                                </div>
                                                <hr/>
                                            </div>
                                            <div className="frontEnd--cours__informs--first">
                                                <div className="frontEnd--cours__informs--first__title">
                                                    <h3>06.</h3>
                                                    <h3>Стажировка</h3>
                                                    <p>После прохождения курса сможете стажироватса в IT <br/>клубе, где
                                                        получете
                                                        опыт работы над реальным <br/>проектом вместе с командой</p>
                                                </div>
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display: choose2 ? "block" : "none"}}
                                         onClick={() => SetChoose2(!choose2)} className='frontEnd--ofline__for'>
                                        <div className="frontEnd--ofline__first--three">
                                            <h1>Онлайн</h1>
                                            <li>В одной группе обучается всего 10-12-14 студентов стандартной формы.
                                            </li>
                                            <li>Занятия будут проходить на кыргызском языке.</li>
                                            <li>Телеграм, ZOOm</li>
                                            <li>Быстрая и оперативная обратная связь от менторов</li>

                                        </div>
                                    </div>


                                </div>
                                <div style={{display: choose ? "block" : "none"}} className="frontEnd--window"></div>
                                <div style={{display: choose2 ? "block" : "none"}} className="frontEnd--window2"></div>

                            </div>

                            <div className="frontEnd--certificate">
                                <div className="container">
                                    <div className="frontEnd--certificate__inform">
                                        <div className="frontEnd--certificate__inform--text">
                                            <h3>Сертификат</h3>
                                            <h6>После успешного завершения обучения выдаётся <br/>международный
                                                сертификат
                                                Государственной <br/>степени, лицензированный Министерством <br/>образования
                                                на 3
                                                языках.</h6>
                                            <div className="frontEnd--certificate__inform--text__buttons">
                                                <button>Кыргызский</button>
                                                <button>Русский</button>
                                                <button>Английский</button>
                                            </div>
                                            <h6>Действителен для всех госучреждений, <br/>IT компаний в Кыргызстане и IT
                                                компаний <br/>в европейских государствах</h6>
                                        </div>
                                        <div className="frontEnd--certificate__inform--img">
                                            <img src={Certificate} alt=""/>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="designer">
                                <div className="container">
                                    <div className="designer--choose">
                                        <h2>Сделай свой первый дизайн</h2> <br/>
                                        <p>Оставляй зявку и БЕСПЛАТНО получи пробный урок</p>
                                    </div>
                                    <div className="designer--fon">
                                        <img src={Card} alt=""/>
                                        <div className="designer--fon__application">
                                            <form>
                                                <input type="text" placeholder="Имя"/>
                                            </form>
                                            <form>
                                                <input type="text" placeholder="Номер"/>
                                            </form>
                                            <div className="designer--fon__application--checked">
                                                <input type="checkbox" className="input"/>
                                                <p>Я соглашаюсь на обработку персональных данных</p>

                                            </div>
                                            <button>Оставить заявку</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mentor">
                                <div className="container">
                                    <div className="mentor--title">
                                        <h2>Лучшие менторы</h2><br/>
                                        <h3>по всему Кыргызстану</h3>
                                    </div>
                                    <div className="mentor--boys">
                                        <div className="mentor--boys__first">
                                            <img src={mentorRight} alt=""/>
                                            <h3>Ахырхан Кайратов</h3>
                                            <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                                фрилансе. <br/>На
                                                счёту 200+ успешных проектов.</p>
                                        </div>
                                        <div className="mentor--boys__first">
                                            <img src={mentorCenter} alt=""/>
                                            <h3>Юля Гавриенко</h3>
                                            <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                                фрилансе. <br/>На
                                                счёту 200+ успешных проектов.</p>
                                        </div>
                                        <div className="mentor--boys__first">
                                            <img src={mentorLeft} alt=""/>
                                            <h3>Алишер Бекназаров</h3>
                                            <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                                фрилансе. <br/>На
                                                счёту 200+ успешных проектов.</p>
                                        </div>

                                    </div>
                                    <div className="mentor--connection">
                                        <div className="mentor--connection__text">
                                            <h2>Самая оперативная <br/>и качественная <br/>обратная связь</h2>
                                            <p>Наши менторы дают подробный <br/>разбор ваших работ, отмечают <br/>ошибки
                                                и помогают
                                                их исправить.</p>
                                        </div>
                                        <div className="mentor--connection__video">
                                            <iframe className="video" src="https://www.youtube.com/embed/7VerRJwJP0s"
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen>
                                            </iframe>
                                            <iframe className="video" src="https://www.youtube.com/embed/H0ZTsv4ljcE"
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen>

                                            </iframe>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="program">
                                <div className="container">
                                    <div className="program--courses">
                                        <h1>Программа курса</h1>
                                        <p>С нашей помощью вы сможете создавать проекты, которые отвечают <br/>высоким
                                            требованиям
                                            юзабилити (UX) и визуала (UI). Вы пройдёте <br/>все этапы создания дизайна
                                            сайта
                                            совместно с опытным куратором <br/>и в итоге научитесь делать проекты на
                                            уровне лидеров
                                            индустрии.</p>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Frontend;