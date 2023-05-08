import React, {useState} from 'react';
import Frontend from "./Frontend";
import FrontendHero from "./frontendHero/FrontendHero";
import Last from "../../components/main-page/Last/Last";
import SingForm from "../../modalPage/SingForm";
import Inform from "./inform/Inform";
import Courses from "./courses/Courses";
import OnlineOfline from "./online-ofline/OnlineOfline";
import Text from "./text/Text";
import Certificate from "./certificate/Certificate";
import Desiginer from "./designer/Desiginer";
import Mentor from "./mentor/Mentor";
import Program from "./program/Program";
import Accordion from "./accordion/Accordion";

const MainFr = () => {
    const [last, setLast] = useState(false)

    const lastForm = () => {
        setLast(true)
    }
    return (
        <div>
            <FrontendHero/>
            <Inform/>
            <Courses/>
            <OnlineOfline/>
            <Text/>
            <Certificate/>
            <Desiginer/>
            <Mentor/>
            <Program/>
            <Accordion/>
            {!last ? <Last lastForm={lastForm}/> : <SingForm/>}
        </div>
    );
};

export default MainFr;