
import React from "react";
import {Link} from "react-router-dom";
function ChallengesStack(props){
    const style={
        backgroundColor:props.challengeState === 'Active' ? '#d2e5d4' : props.challengeState === 'Upcoming' ? '#fcf1d2' : '#ffded4',
        color:props.challengeState === 'Active' ? '#44924c' : props.challengeState === 'Upcoming' ? '#666666' : '#666666'
        
    }
    return <div className="challenge">
            <img src={props.challengeImg} alt="" className="challengeImg" />
            <p className="challengeState" style={style}>{props.challengeState}</p>
            <p className="challengeTitle">{props.challengeTitle}</p>
            <p className="challengeTime">{props.challengeState==='Active'?'Ends In':props.challengeState==="Upcoming"?"Starts In":"Ended On"}</p>
            <h1 className="timer">{props.timer}</h1>
            <Link to="/overview"><button className="participateBtn"><i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;&nbsp;Participate Now</button></Link>

    </div>
}
export default ChallengesStack;