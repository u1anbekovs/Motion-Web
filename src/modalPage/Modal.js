import React, {useEffect, useState} from 'react';
import "./Modal.scss"
import smiling from "./../image/main/smiling-face 2.svg";
import {IoIosCloseCircle} from "react-icons/io";
import validation from "./validation/Validation";
import axios, {postForm} from "axios";
import text from "../pages/Frontend/text/Text";

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

    // const bot = {
    //     TOKEN:'6205769608:AAFOHbdlibLnZRsNat3aFz0v7Uh4XcdIDfs',
    //     chatID: '-984802394',
    // }
    const TOKEN = '6205769608:AAFOHbdlibLnZRsNat3aFz0v7Uh4XcdIDfs'
    const CHAT_ID = '-984802394'
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=-984802394&text=${text.value}`

    // const post_Form = async () => {
    //     await axios(` https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${values.value}`, {
    //         name: values.name,
    //         phone: values.phone,
    //     })
    // }




    const handleSubmit = (e) => {
        e.preventDefault()

        let massage = `<b>Заявка с сайта</b>\n`
        massage += `<b>отправитель:<b/> ${this.name.value}\n`
        massage += `<b>почта:<b/> ${this.phone.value}`

        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: massage
        })

            .then((res) => {
                this.name.value = '';
                this.phone.value = '';
            })
            .catch((errors) => {
                console.warn(errors)
            })
            .finally(() => {
                console.log('end')
            })


    }

    // const post_Form = async () => {
    //     await axios(` https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${values.value}`,{
    //         name: values.name,
    //         email: values.email,
    //     })
    // }

    return (
        <div>

            <form className="modal--content" onClick={e => e.stopPropagation()}>
                {/*<img src={smiling} alt=""/>*/}
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
                        name='number'
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