import React from "react";
import Input from "./Input";
import editImg from "../assets/icons/bi_image-fill.svg";
import OldImg from "../assets/cardimage/Group 1000002766.png";

function Edit(){
return <>
    <section id="createChallenge">
        <h1 className="createChallengeHeading">Challenge Details</h1>
        <form action="" className="createChallengeForm">
            <Input 
                challengeName="Data Sprint 72 - Butterfly Identification"
                startDate="17th Jun'22 09:00 PM"
                endDate="21st Jun'22 11:00 PM"
                description="Identify the class to which each butterfly belongs to"
            />
            <label htmlFor="image" className="formLabel">Image</label>
            <input type="file" name="image" id="" className="fileInputEdit" />
            <button className="editImgBtn"><img src={editImg} alt="" /> Change Image &rarr;</button>
            <img src={OldImg} alt="" className="oldImg" />
            
            <label htmlFor="leveld" className="formLabel">Level Type</label>
            <select name="level" id="" className="levels">
                <option value="Easy" className="level">Easy</option>
                <option value="Medium" className="level">Medium</option>
                <option value="Hard" className="level">Hard</option>
            </select><br />
            <input type="submit" value="Save Changes" className="submitChallengeBtn" />
           

        </form>
    </section>
</>
}
export default Edit