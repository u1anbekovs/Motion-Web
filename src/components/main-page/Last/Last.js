import React, {useEffect, useState} from 'react';
import "../../../style/main/Last.scss"
import validation from "../../../modalPage/validation/Validation";


const Last = ({lastForm}) => {


    const [values, setValues] = useState({
        name: "",
        number: "",
        email: "",
    })


    const [errors, setErrors] = useState({})
    const [correct, setCorrect] = useState(false)


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
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
                        <h1>Оставить заявку на обучение <br/> или получить консультацию</h1>
                        <p>Менеджер свяжется с вами в течение 30 минут <br/> и ответит на все интересующие вопросы.</p>
                    </div>


                    <form className="application--inputs">


                        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={values.name}
                            placeholder="Имя"/>


                        {errors.number && <p style={{color: "red"}}>{errors.number}</p>}
                        <input
                            onChange={handleChange}
                            type="number"
                            name="number"
                            value={values.number}
                            placeholder="Номер"/>


                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Электронная почта"/>


                        <div className="application--inputs__label">
                            <input id="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox">Я соглашаюсь на обработку персональных данных</label>
                        </div>


                        <button onClick={handleFormSubmit}>Оставить заявку</button>


                    </form>


                </div>
            </div>
        </section>
    );
};

export default Last;