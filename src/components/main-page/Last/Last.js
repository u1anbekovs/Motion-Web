import React, {useEffect, useState} from 'react';
import "../../../style/main/Last.scss"
import validation from "../../../modalPage/validation/Validation";
import {useTranslation} from "react-i18next";
import axios from "axios";


const Last = ({lastForm}) => {


    const TOKEN = '6205769608:AAFOHbdlibLnZRsNat3aFz0v7Uh4XcdIDfs';
    const CHAT_ID = "-984802394";
    const [firstName, setFirstName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [red, setRed] = useState(false);
    const [finish, setFinish] = useState(false);

    let message = `<b>консультацию</b>\n`;
    message += `first name: ${firstName.trim()}\n`;
    message += `phone: ${tel.trim()}\n`;
    message += `email: ${email.trim()}\n`;

    const fetchSubmit = async (e) => {
        await axios
            .post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                parse_mode: "html",
                text: message,
            })
            .then(() => {
                allState()
                handleFormSubmit()

            })
            .catch(() => {
                console.error("error");
            })
            .finally(() => {
                setFinish(true);
                setTimeout(() => {
                    setFinish(false);
                }, 3000);
            });
    };

    const allState = () => {
        setFirstName("")
        setTel("")
        setEmail("")
    };

    const Asan = [firstName, tel].every(childAsan);

    function childAsan(str) {
        return str.length !== 0;
    }

    const getFinish = () => {
        return Asan ? fetchSubmit() : setRed(true);
    };


    //====//

    const {t} = useTranslation()

    const [values, setValues] = useState({
        name: "",
        number: "",
        email: "",
    })


    const [errors, setErrors] = useState({})
    const [correct, setCorrect] = useState(false)


    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value,})
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
                    <form className="application--inputs" onSubmit={(e) => {
                        e.preventDefault();
                        getFinish();
                    }}>
                        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                        <input
                            onChange={(event) => {
                                setFirstName(event.target.value)
                            }}
                            type="text"
                            name="name"
                            value={firstName}

                            placeholder={t("text47")}/>


                        {errors.number && <p style={{color: "red"}}>{errors.number}</p>}
                        <input
                            onChange={(event) => {
                                setTel(event.target.value)
                            }}
                            type="number"
                            name="number"
                            value={tel}
                            placeholder={t("text46")}/>


                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                        <input
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                            type="email"
                            name="email"
                            value={email}
                            placeholder={t("text45")}/>

                        <div className="application--inputs__label">
                            <input id="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox">{t("text44")}</label>
                        </div>


                        <button>{t("text7")}</button>


                    </form>


                </div>
            </div>
        </section>
    );
};

export default Last;