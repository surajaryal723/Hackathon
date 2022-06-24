import React from "react";
import ReasonStack from "./ReasonsStack";
import robot from "../assets/icons/Robot.svg";
import card from "../assets/icons/IdentificationCard.svg";
import people from "../assets/icons/Vector.svg";
import note from "../assets/icons/carbon_notebook-reference.svg";

function Reasons() {
    return <section id="reason">
        <h1 className="reasonHeading">Why Participate in <span className="headingGreen">AI Challenges</span></h1>
        <div className="reasons">
        <ReasonStack reasonImg={note} reasonTitle="Prove your Skills" reasonDesc="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."/>
        <ReasonStack reasonImg={people} reasonTitle="Learn from Community" reasonDesc="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."/>
        <ReasonStack reasonImg={robot} reasonTitle="Challenge yourself" reasonDesc="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."/>
        <ReasonStack reasonImg={card} reasonTitle="Earn recognition" reasonDesc="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."/>
        </div>
    </section>
}

export default Reasons;