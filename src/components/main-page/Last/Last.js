import React, {useEffect, useState} from 'react';
import "../../../style/main/Last.scss"
import validation from "../../../modalPage/validation/Validation";
import {useTranslation} from "react-i18next";


const Last = ({lastForm}) => {

    const {t} = useTranslation()


    const [values, setValues] = useState({
        name: "",
        number: "",
        email: "",
    })


    const [errors, setErrors] = useState({})
    const [correct, setCorrect] = useState(false)


    const handleChange = (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value,
        })
    }


    const handleFormSubmit = (event) => {
        event.preventDefault()
        setErrors(validation(values))
        setCorrect(true)
    }


    useEffect(() => {
        if (Object.keys(errors).length === 0 && correct) {
            lastForm(true)
        }
    }, [errors])

    return (
        <section id="application">
            <div className="container">
                <div className="application">
                    <div className="application--text">
                        <h1>{t("text40")} <br/> {t("text41")}</h1>
                        <p>{t("text42")} <br/> {t("text43")}</p>
                    </div>
                    <form className="application--inputs">


                        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                        <input

                            onChange={handleChange}

                            type="text"

                            name="name"

                            value={values.name}

                            placeholder="Имя"/>

                            placeholder={t("text47")}/>


                        {errors.number && <p style={{color: "red"}}>{errors.number}</p>}
                        <input
                            onChange={handleChange}
                            type="number"
                            name="number"
                            value={values.number}
                            placeholder={t("text46")}/>


                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder={t("text45")}/>


                        <div className="application--inputs__label">
                            <input id="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox">{t("text44")}</label>
                        </div>


                        <button onClick={handleFormSubmit}>{t("text7")}</button>


                    </form>


                </div>
            </div>
        </section>
    );
};

export default Last;