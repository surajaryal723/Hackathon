
import React from "react";
function ReasonStack(props){
    
   return <div className="reason">
    <img src={props.reasonImg} alt="" className="reasonImage" />
    <h1 className="reasonTitle">{props.reasonTitle}</h1>
    <p className="reasonDescription">{props.reasonDesc}</p>
    </div>
   
}
export default ReasonStack;