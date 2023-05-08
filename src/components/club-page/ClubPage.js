import React from 'react';
import Hero from "./Hero/Hero";
import Club from "./Club/Club";
import Project from "./Project/Project";
import Last from "./Last/Last";
import Receive from "./receive/Receive";

const ClubPage = () => {
    return (
        <div>
            <Hero/>
            <Club/>
            <Project/>
            <Last/>
            <Receive/>
        </div>
    );
};

export default ClubPage;