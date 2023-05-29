import React, {useState} from 'react';
import Certificate from "../Frontend/certificate/Certificate";
import Last from "../../components/main-page/Last/Last";
import SingForm from "../../modalPage/SingForm";
import Inform from "../Frontend/inform/Inform";
import Courses from "../Frontend/courses/Courses";
import OnlineOfline from "../Frontend/online-ofline/OnlineOfline";
import Text from "../Frontend/text/Text";
import Desiginer from "../Frontend/designer/Desiginer";
import Mentor from "../Frontend/mentor/Mentor";
import Program from "../Frontend/program/Program";
import Accordion from "../Frontend/accordion/Accordion";
import HeroUx from "./HeroUx";

const UiUx = () => {

    const [last, setLast] = useState(false)

    const lastForm = () => {
        setLast(true)
    }

    return (
        <div>
            <HeroUx/>
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

export default UiUx;