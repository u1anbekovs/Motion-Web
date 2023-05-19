import React, {useEffect, useState} from 'react';
import "./Modal.scss"
import smiling from "./../image/main/smiling-face 2.svg";
import {IoIosCloseCircle} from "react-icons/io";
import validation from "./validation/Validation";
import {CiCalculator1} from 'react-icons/ci'
import axios from "axios";

const Modal = ({startForm, submitForm}) => {


    const TOKEN ='6205769608:AAFOHbdlibLnZRsNat3aFz0v7Uh4XcdIDfs';
    const CHAT_ID = "-984802394";

    const [firstName, setFirstName] = useState("");
    const [tel, setTel] = useState("");
    const [red, setRed] = useState(false);
    const [finish, setFinish] = useState(false);

    const [isSocialModal, setIsSocialModal] = useState(false);
    let message = `<b>user</b>\n`;
    message += `first name: ${firstName.trim()}\n`;
    message += `phone: ${tel.trim()}\n`;

    const fetchSubmit = async (e) => {
        await axios
            .post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                parse_mode: "html",
                text: message,
            })
            .then(() => {
                allState()
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
    };

    const Asan = [firstName, tel].every(childAsan);

    function childAsan(str) {
        return str.length !== 0;
    }

    const getFinish = () => {
        return Asan ? fetchSubmit() : setRed(true);
    };

    // --//

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

    return (
        <div>
            <form className="modal--content" onSubmit={(e) => {
                e.preventDefault();
                getFinish();
            }} onClick={e => e.stopPropagation()}>
                <img src={smiling} alt=""/>
                <h4 onClick={() => startForm(true)}><IoIosCloseCircle/></h4>

                <div>
                    {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                    {/*<input*/}
                    {/*    onChange={handleChange}*/}
                    {/*    type="text"*/}
                    {/*    name="name"*/}
                    {/*    value={values.name}*/}
                    {/*    placeholder="Имя"/>*/}

                    <input value={firstName}
                           onChange={(e) => {
                               setFirstName(e.target.value);
                               setRed(false);
                           }}
                           placeholder={'name'}
                           name={"Name"}
                           className={red ? "inputRed" : "input2"}
                    />
                </div>

                <div>
                    {errors.number && <p style={{color: "red"}}>{errors.number}</p>}
                    {/*<input*/}
                    {/*    onChange={handleChange}*/}
                    {/*    type="number"*/}
                    {/*    name='number'*/}
                    {/*    value={values.number}*/}
                    {/*    placeholder="Номер"/>*/}
                    <input
                        value={tel}
                        onChange={(e) => {
                            setTel(e.target.value);
                            setRed(false);
                        }}
                        name={"tel"}
                        placeholder="phone"
                        className={red ? "inputRed" : "input3"}
                    />
                </div>

                <div className="modal--content__label">
                    <input id="checkbox1" type="checkbox"/>
                    <label htmlFor="checkbox1">Я соглашаюсь на обработку персональных данных</label>
                </div>

                <button>Оставить заявку</button>
            </form>
        </div>
    );
};

export default Modal;



    //
    // const TOKEN ='6205769608:AAFOHbdlibLnZRsNat3aFz0v7Uh4XcdIDfs';
    // const CHAT_ID = "-984802394";

    // const [firstName, setFirstName] = useState("");
    // const [tel, setTel] = useState("");
    // const [red, setRed] = useState(false);
    // const [finish, setFinish] = useState(false);

    ////////////////////////////

    // const [isSocialModal, setIsSocialModal] = useState(false);
    // let message = `<b>All</b>\n`;
    // message += `first name: ${firstName.trim()}\n`;
    // message += `tel: ${tel.trim()}\n`;
    //
    // const fetchSubmit = async (e) => {
    //     await axios
    //         .post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    //             chat_id: CHAT_ID,
    //             parse_mode: "html",
    //             text: message,
    //         })
    //         .then(() => {
    //             allState()
    //         })
    //         .catch(() => {
    //             console.error("error");
    //         })
    //         .finally(() => {
    //             setFinish(true);
    //             setTimeout(() => {
    //                 setFinish(false);
    //             }, 3000);
    //         });
    // };
    //
    // const allState = () => {
    //     setFirstName("")
    // };
    //
    // const Asan = [firstName, tel].every(childAsan);
    //
    // function childAsan(str) {
    //     return str.length !== 0;
    // }
    //
    // const getFinish = () => {
    //     return Asan ? fetchSubmit() : setRed(true);
    // };



    // return (
    //     <div>
    //         <div id="info">
    //             <div style={{display: finish ? "block" : "none",}} className="info--bg">
    //                 <h1>Amazing👍🏻</h1>
    //             </div>
    //             <div className="container">
    //                 <div className="info">
    //                     <form
    //                         className="info-form"
    //                         onSubmit={(e) => {
    //                             e.preventDefault();
    //                             getFinish();
    //                         }}>
    //                         <h2 className="info-form_title">Send a message</h2>
    //                         <div className="info-form_group">
    //                             <input value={firstName}
    //                                    onChange={(e) => {
    //                                     setFirstName(e.target.value);
    //                                     setRed(false);
    //                                    }}
    //                                 name={"lastName"}
    //                                 className={red ? "inputRed" : "input2"}
    //                             />
    //                             <input
    //                                 value={tel}
    //                                 onChange={(e) => {
    //                                     setTel(e.target.value);
    //                                     setRed(false);
    //                                 }}
    //                                 name={"tel"}
    //                                 placeholder="phone"
    //                                 className={red ? "inputRed" : "input3"}
    //                             />
    //                         </div>
    //                         <button className="info-form_btn">Submit</button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    //
