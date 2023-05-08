import React, {useEffect, useState} from 'react';
import "./Modal.scss"
import smiling from "./../image/main/smiling-face 2.svg";
import {IoIosCloseCircle} from "react-icons/io";
import validation from "./validation/Validation";

const Modal = ({startForm, submitForm}) => {



    const [values, setValues] = useState({
        name: "",
        number: "",
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
            submitForm(true)
        }
    }, [errors])

    return (
        <div>
            <form className="modal--content" onClick={e => e.stopPropagation()}>
                <img src={smiling} alt=""/>
                <h4 onClick={() => startForm(true)}><IoIosCloseCircle/></h4>

                <div>
                    {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Имя"/>
                </div>


                <div>
                    {errors.number && <p style={{color: "red"}}>{errors.number}</p>}
                    <input
                        onChange={handleChange}
                        type="number"
                        name="number"
                        value={values.number}
                        placeholder="Номер"/>
                </div>



                <div className="modal--content__label">
                    <input id="checkbox1" type="checkbox"/>
                    <label htmlFor="checkbox1">Я соглашаюсь на обработку персональных данных</label>
                </div>

                <button onClick={handleFormSubmit}>Оставить заявку</button>

            </form>
        </div>
    );
};

export default Modal;