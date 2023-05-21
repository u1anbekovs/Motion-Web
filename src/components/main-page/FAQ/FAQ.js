import React, {useState, useRef} from 'react';
import "./../../../style/main/FAQ.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {useTranslation} from "react-i18next";

const faqs = [
    {
        id: 1,
        header: "Нужны ли начальные знания для учёбы?",
        text: "",
    },
    {
        id: 2,
        header: "Как проходит консультация?",
        text: "",
    },
    {
        id: 3,
        header: "Какой график обучения? Получится ли совмещать его с работой?",
        text: "",
    },
    {
        id: 4,
        header: "Мне помогут трудоустроится?",
        text: "",
    },
    {
        id: 5,
        header: "Кто мне поможет, если возникнут вопросы?",
        text: "",
    },
    {
        id: 6,
        header: "Какая техника нужна для обучения?",
        text: "",
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
                active === id
                    ? {height: contentEl.current.scrollHeight}
                    : {height: "0px"}
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