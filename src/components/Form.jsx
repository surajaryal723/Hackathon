import React from "react";
import Input from "./Input";
import uploadIcon from "../assets/icons/bxs_cloud-upload.svg"
function Form() {
    
    return <section id="createChallenge">
        <h1 className="createChallengeHeading">Challenge Details</h1>
        <form action="" className="createChallengeForm">
            <Input/>
            <label htmlFor="image" className="formLabel">Image</label>
            <input type="file" name="image" id="" className="fileInput" />
            <button className="uploadBtn fileInput">Upload <img src={uploadIcon} alt="" className="imgIcon" /></button>
            <label htmlFor="leveld" className="formLabel">Level Type</label>
            <select name="level" id="" className="levels">
                <option value="Easy" className="level">Easy</option>
                <option value="Medium" className="level">Medium</option>
                <option value="Hard" className="level">Hard</option>
            </select><br />
            <input type="submit" value="Create Challenge" className="submitChallengeBtn" />
           

        </form>
    </section>
}
export default Form;
