import React from "react";
import DataStack from "./DataStack";
import logoicon1 from "../assets/icons/Group 1000002515.svg";
import logoicon2 from "../assets/icons/Group 1000002516.svg";
import logoicon3 from "../assets/icons/Group 1000002518.svg";
function Data(){
    return <section id="data">
    <DataStack source={logoicon1} dataCount="100K+" description="AI model submissions"/>
    <DataStack source={logoicon2} dataCount="50K+" description="Data Scientists"/>
    <DataStack source={logoicon3} dataCount="100+" description="AI Challenges Hosted"/>

    </section>
   
}

export default Data;