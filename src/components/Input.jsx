import React from "react";
import Calendar from "../assets/icons/uil_calender.svg";
function Input(props){
    return <>
    
        <label htmlFor="challenge" className="formLabel">Challenge Name</label>
            <input type="text" name="challenge" id="" className="challengeInput" value={props.challengeName} />
            <label htmlFor="startDate" className="formLabel">Start Date</label>
            <input type="date" name="startDate" id="" className="date1" value={props.startDate} />
            <img src={Calendar} alt="" className="calendar1" />
            <label htmlFor="endDate" className="formLabel">End Date</label>
            <input type="date" name="endDate" id="" className="date2" value={props.endDate} />
            <img src={Calendar} alt="" className="calendar2" />
            <label htmlFor="description" className="formLabel">Description</label>
            <input type="text" name="description" id="" className="description" value={props.description} />
    </>
}
export default Input;