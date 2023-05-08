import React, {useState} from 'react';
import an1 from "../../image/main/an1.png";
import an4 from "../../image/main/an4.png";
import an6 from "../../image/main/an5.png";
import an7 from "../../image/main/an7.png";
import an3 from "../../image/main/an3.png";
import an2 from "../../image/main/an2.png";
import an11 from "../../image/main/an11.png";
import an13 from "../../image/main/an13.png";
import an8 from "../../image/main/an8.png";
import an10 from "../../image/main/an10.png";
import an9 from "../../image/main/an9.png";
import an1media from "../../image/main/an1media.png";
import an3media from "../../image/main/an3media.png";
import an4media from "../../image/main/an4media.png";
import an5media from "../../image/main/an5media.png";
import FirstImg from "../../image/frontEnd/first.png";
import secondImg from "../../image/frontEnd/second.png";
import thirdImg from "../../image/frontEnd/third.png";
import Certificate from "../../image/frontEnd/certificate.png";
import Card from "../../image/frontEnd/designer.png";
import mentorRight from "../../image/frontEnd/mentorRight.png";
import mentorCenter from "../../image/frontEnd/mentorCenter.png";
import mentorLeft from "../../image/frontEnd/mentorLeft.png";
import Last from "../../components/main-page/Last/Last";
import SingForm from "../../modalPage/SingForm";

const Backend = () => {


    const [last, setLast] = useState(false)

    const lastForm = () => {
        setLast(true)
    }

    return (
        <div className=''>
            <div className="heroUxUi">
                <div id="FrontendHero">
                    <div className='title'>
                        <h1>BACK <span>END</span></h1>
                        <p>UX/UI-дизайн — это процесс создания интерактивных, <br/>удобных интерфейсов. Отличный вариант
                            профессии <br/>для творческих людей, которым нравится решать <br/>проблемы пользователей и
                            создавать что-то новое, <br/>сочетая логику и эстетику.</p>
                        <button>Оставить заявку</button>
                    </div>
                    <div className="FrontendHero">
                        <div className="an1">
                            <img src={an1} alt=""/>
                        </div>
                        <div className="an4">
                            <img src={an4} alt=""/>
                        </div>
                        <div className="an6">
                            <img src={an6} alt=""/>
                        </div>
                        <div className="an7">
                            <img src={an7} alt=""/>
                        </div>
                        <div className="an5">
                            <img src={an6} alt=""/>
                        </div>
                        <div className="an3">
                            <img src={an3} alt=""/>
                        </div>
                        <div className="an2">
                            <img src={an2} alt=""/>
                        </div>
                        <div className="an11">
                            <img src={an11} alt=""/>
                        </div>
                        <div className="an12">
                            <img src={an13} alt=""/>
                        </div>
                        <div className="an8">
                            <img src={an8} alt=""/>
                        </div>
                        <div className="an10">
                            <img src={an10} alt=""/>
                        </div>
                        <div className="an9">
                            <img src={an9} alt=""/>
                        </div>


                        <div className="an1media">
                            <img src={an1media} alt=""/>
                        </div>

                        <div className="an3media">
                            <img src={an3media} alt=""/>
                        </div>
                        <div className="an4media">
                            <img src={an4media} alt=""/>
                        </div>
                        <div className="an5media">
                            <img src={an5media} alt=""/>
                        </div>
                        <div className="media91"></div>
                        <div className="media56"></div>
                        <div className="media80"></div>
                        <div className="media38"></div>
                        <div className="media62"></div>
                        <div className="media33"></div>
                        <div className="media110"></div>
                        <div className="media88"></div>
                        <div className="media54"></div>
                        <div className="backdropBlur"></div>

                    </div>
                </div>

            </div>
            <div className="UxUi">
                <div id="frontEnd">
                    <div className="frontEnd">
                        <div className="container">


                            <div className="frontEnd--inform">
                                <div className="frontEnd--inform__question">

                                    <h3>Почему <span>MOTIN WEB IT ACADEMY</span>?</h3>
                                </div>
                                <div className="frontEnd--inform__text">
                                    <p>На данном курсе мы сконцентрируем внимание на сайтах и научим вас с нуля
                                        проектировать их на уровне ведущих дизайн-студий.</p>

                                    <h4>Наша программа построена таким образом, что уже через 3 месяца ваших знаний
                                        будет достаточно для поиска работы на позицию junior-дизайнера. Параллельно вы
                                        продолжите обучение, пополняя портфолио сильными кейсами, чтобы быстрее дорасти
                                        до уровня middle и senior.</h4>

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
                                        <p>Научитесь с нуля разрабатывать интерфейсы. <br/>Узнаете, как с помощью
                                            дизайна направлять <br/>пользователей и решать задачи</p>

                                    </div>
                                    <div className="frontEnd--courses__inform--first">
                                        <div className="frontEnd--courses__inform--first__fon">
                                            <img src={secondImg} alt=""/>
                                        </div>
                                        <h3>Junior-дизайнерам</h3>
                                        <p>Научитесь с нуля разрабатывать интерфейсы. <br/>Узнаете, как с помощью
                                            дизайна направлять <br/>пользователей и решать задачи</p>


                                    </div>
                                    <div className="frontEnd--courses__inform--first">
                                        <div className="frontEnd--courses__inform--first__fon">
                                            <img src={thirdImg} alt=""/>
                                        </div>
                                        <h3>Опытным дизайнерам</h3>
                                        <p>Получите навыки в продуктовом и UX-<br/>дизайне, заполните пробелы в
                                            знаниях. <br/>Сможете создавать прототипы приложений и <br/> повысить
                                            стоимость своей работы</p>

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
                                <button>Офлайн</button>
                                <button>Онлайн</button>
                            </div>

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
                                                <p>Мы помогаем студентам с высшим образованием <br/>(получившим Золотой
                                                    сертификат) получить работу</p>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="frontEnd--cours__informs--first">
                                            <div className="frontEnd--cours__informs--first__title">
                                                <h3>02.</h3>
                                                <h3>Английский</h3>
                                                <p>Бесплатные уроки по английскому языку 3 раза <br/>в неделю. Это
                                                    поможет вам в будущем работать <br/>с зарубежними проектами и
                                                    компаниями</p>
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
                                                <p>Помимо тренера (ментора) помощь оказывается <br/>со стороны SUPPORT
                                                </p>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="frontEnd--cours__informs--first">
                                            <div className="frontEnd--cours__informs--first__title">
                                                <h3>05.</h3>
                                                <h3>Индивидуальное работа <br/>с каждым</h3>
                                                <p>Наша система образования построена на то, <br/>чтобы делать упор на
                                                    сильные стороны ученика <br/>и подходить к каждому индивидуально</p>
                                            </div>
                                            <hr/>
                                        </div>
                                        <div className="frontEnd--cours__informs--first">
                                            <div className="frontEnd--cours__informs--first__title">
                                                <h3>06.</h3>
                                                <h3>Стажировка</h3>
                                                <p>После прохождения курса сможете стажироватса в IT <br/>клубе, где
                                                    получете опыт работы над реальным <br/>проектом вместе с командой
                                                </p>
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="frontEnd--certificate">
                            <div className="container">
                                <div className="frontEnd--certificate__inform">
                                    <div className="frontEnd--certificate__inform--text">
                                        <h3>Сертификат</h3>
                                        <h6>После успешного завершения обучения выдаётся <br/>международный сертификат
                                            Государственной <br/>степени, лицензированный Министерством <br/>образования
                                            на 3 языках.</h6>
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
                                            фрилансе. <br/>На счёту 200+ успешных проектов.</p>
                                    </div>
                                    <div className="mentor--boys__first">
                                        <img src={mentorCenter} alt=""/>
                                        <h3>Юля Гавриенко</h3>
                                        <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                            фрилансе. <br/>На счёту 200+ успешных проектов.</p>
                                    </div>
                                    <div className="mentor--boys__first">
                                        <img src={mentorLeft} alt=""/>
                                        <h3>Алишер Бекназаров</h3>
                                        <p>Ментор по UI/UX дизайну. Работал <br/>в амерканской компании и на
                                            фрилансе. <br/>На счёту 200+ успешных проектов.</p>
                                    </div>

                                </div>
                                <div className="mentor--connection">
                                    <div className="mentor--connection__text">
                                        <h2>Самая оперативная <br/>и качественная <br/>обратная связь</h2>
                                        <p>Наши менторы дают подробный <br/>разбор ваших работ, отмечают <br/>ошибки и
                                            помогают их исправить.</p>
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
                                        требованиям юзабилити (UX) и визуала (UI). Вы пройдёте <br/>все этапы создания
                                        дизайна сайта совместно с опытным куратором <br/>и в итоге научитесь делать
                                        проекты на уровне лидеров индустрии.</p>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div className="accordionFront">

                        </div>


                    </div>
                </div>
            </div>
            {!last ? <Last lastForm={lastForm}/> : <SingForm/>}
        </div>
    );
};

export default Backend;