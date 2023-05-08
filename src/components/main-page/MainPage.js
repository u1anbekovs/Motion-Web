import React, {useState} from 'react';
import Hero from "./Hero/Hero";
import AboutUS from "./AboutUs/AboutUS";
import Courses from "./Courses/Courses";
import Project from "./Project";
import Slick from "./Slick";
import Last from "./Last/Last";
import FAQ from "./FAQ/FAQ";

import Motion from "./Motion/Motion";
import SingForm from "../../modalPage/SingForm";

const MainPage = () => {

    const [last, setLast] = useState(false)

    const lastForm = () => {
        setLast(true)
    }


    return (
        <div>
            <Hero/>
            <AboutUS/>
            <Courses/>
            <Motion/>
            <Project/>
            <Slick/>
            <FAQ/>
            {!last ? <Last lastForm={lastForm}/> : <SingForm/>}
        </div>
    );
};

export default MainPage;