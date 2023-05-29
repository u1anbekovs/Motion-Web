import React, {useState, useRef} from 'react';
import "./../../../style/main/FAQ.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {useTranslation} from "react-i18next";

const faqs = [
    {
        id: 1,
        header: "Нужны ли начальные знания для учёбы?",
        text:    "Для учебы на курсе программирования обычно рекомендуется иметь базовые знания компьютера и уметь работать с операционной системой. Определенные курсы могут требовать предварительных знаний или навыков в определенных языках программирования или областях разработки. Однако, существуют и курсы, которые предназначены для начинающих и предоставляют все необходимые основы.",
    },
    {
        id: 2,
        header: "Как проходит консультация?",
        text: "Консультации на курсе программирования могут проходить в различных форматах, включая личные встречи, онлайн-конференции, чаты или форумы. Обычно студенты могут общаться с преподавателями, наставниками или соучастниками курса, чтобы получить ответы на вопросы, разъяснения материала или дополнительную поддержку.",
    },
    {
        id: 3,
        header: "Какой график обучения? Получится ли совмещать его с работой?",
        text: "График обучения может варьироваться в зависимости от курса и его формата. Некоторые курсы предлагают гибкий график, который позволяет студентам проходить материал в своем темпе, в то время как другие могут иметь определенные сроки и дедлайны. Если у вас есть работа, то лучше выбрать курс с гибким графиком, чтобы иметь возможность совмещать учебу и работу.",
    },
    {
        id: 4,
        header: "Мне помогут трудоустроится?",
        text: "Предоставляем помощь в трудоустройстве, предлагая ресурсы для поиска работы или установление контактов с работодателями. Однако, не все курсы предлагают гарантию трудоустройства. ",
    },
    {
        id: 5,
        header: "Кто мне поможет, если возникнут вопросы?",
        text: "Курсы программирования обычно имеют команду преподавателей и наставников, которые готовы помочь вам с возникшими вопросами и трудностями. Они могут предоставить разъяснения материала, дать дополнительные примеры и объяснения, а также помочь в решении конкретных проблем.",
    },
    {
        id: 6,
        header: "Какая техника нужна для обучения?",
        text: "Необходим компьютер или ноутбук с доступом в Интернет, чтобы получить доступ к материалам курса, выполнять задания и практиковаться в программировании. Желательно, чтобы ноутбук был достаточно мощным, чтобы запускать современные инструменты и среды разработки.",
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const {handleToggle, active, faq} = props;
    const {header, id, text} = faq;

    return (
        <div className="card">
            <div className="card--header">
                <div className={`card--header__toggle ${active === id ? 'active' : ''}`}
                     onClick={() => handleToggle(id)}>
                    <h3>{header}</h3>
                    <p><MdOutlineKeyboardArrowDown/></p>

                </div>

            </div>


            <div ref={contentEl} className={`card--collapse ${active === id ? 'show' : ''}`} style={
                active === id ? {height: contentEl.current.scrollHeight} : {height: "0px"}
            }>

                <div className="card--collapse__body">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

const Accordion = () => {

    const [active, setActive] = useState(null);
    const {t} = useTranslation()


    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <section id="accordion">
            <div className="container">
                <div className="accordion">
                    <h1>{t("text39")}</h1>
                    <div className="accordion--details">

                        {faqs.map((faq, index) => {
                            return (
                                <AccordionItem key={index} active={active} handleToggle={handleToggle}
                                               faq={faq}/>
                            )
                        })
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Accordion