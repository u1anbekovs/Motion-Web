import React, {useState} from 'react';
import Frontend from "./Frontend";
import FrontendHero from "./frontendHero/FrontendHero";
import Last from "../../components/main-page/Last/Last";
import SingForm from "../../modalPage/SingForm";

const MainFr = () => {
    const [last, setLast] = useState(false)

    const lastForm = () => {
        setLast(true)
    }
    return (
        <div>
            <FrontendHero/>
            <Frontend/>
            {!last ? <Last lastForm={lastForm}/> : <SingForm/>}
        </div>
    );
};

export default MainFr;