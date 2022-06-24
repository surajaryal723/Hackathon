import React from "react";
import easy from "../assets/icons/carbon_skill-level-basic.svg";
import { Link } from "react-router-dom";
function Overview(props){
return <>
    <section id="overview">
        <div className="overviewTop">
        <p className="time"><i class="fa-regular fa-clock"></i>&nbsp;&nbsp;Starts on {props.date} (India Standard Time)</p>
        <h1 className="overviewChallengeTitle">{props.title}</h1>
        <p className="overviewChallengeShortDesc">{props.shortdesc}</p>
        <span className="overviewLevel"><img src={easy} alt="" />&nbsp;&nbsp;Easy</span>
        </div>
    </section>
        <div className="overviewMiddle">
        <span className="overviewNav">Overview</span>
        <span className="btnGroup">
            <Link to="/edit"><button className="editBtn">Edit</button></Link>
            <button className="deleteBtn">Delete</button>
        </span>
        </div>
        <div className="overviewChallengeLongDesc">
            <p className="firstPara">{props.firstParagraph}</p>
            <p className="secondPara">{props.secondParagraph}</p>
            <p className="thirdPara">{props.thirdParagraph}</p>
        </div>
</>
}
export default Overview;