import React, { useState } from "react";
import ChallengesStack from "./ChallengesStack";
import cardImage1 from "../assets/cardimage/Group 1000002466.png"
import cardImage2 from "../assets/cardimage/Group 1000002766.png"
import cardImage3 from "../assets/cardimage/Group 1000002767.png"
import cardImage4 from "../assets/cardimage/Group 1000002771.png"
import cardImage5 from "../assets/cardimage/Group 1000002772.png"
import cardImage6 from "../assets/cardimage/Group 1000002773.png"
function Challenges(){
  let options=document.querySelectorAll(".option");
  options.forEach(function(option){
    option.addEventListener("click",function(){
      if(this.checked){
        let value=this.value;
      let span=document.createElement("span");
      let cross=document.createElement("i");
      cross.classList.add("fa-regular","fa-circle-xmark","cross");
      span.append(value);
      span.append(cross);
      span.classList.add("filter");
     
      document.querySelector(".filterBar").append(span);
      }
    })
  })

 
  
  
  let time= new Date();
  let hour=time.getHours();
  let minutes=time.getMinutes();
  let seconds=time.getSeconds();
  const[timeState,setTime]=useState(`${hour} : ${minutes} : ${seconds}`);
  const [click,setClick]=useState(false);
  function handleClick(e){
    e.preventDefault();
    setClick(true);
    var list=document.querySelector(".dropdown-check-list");
    if(list.classList.contains("display-none")){
      list.classList.remove("display-none");
      
    }else{
      list.classList.add("display-none");
    }
  }
  const btnStyle={
    width:click?"20%":"15%",
    borderRadius:click?null:"10px"
  }
    return <>
      <section id="challenges">
        <h2 className="challengeHeading">Explore Challenges</h2>
      <form action="" className="searchForm">
      <input type="search" className="search" placeholder="Search" />
      <i className="fa-solid fa-magnifying-glass searchIcon"></i>
      <button className="filterBtn" onClick={handleClick} style={btnStyle}>Filter&nbsp;&nbsp;<i class="fa-solid fa-caret-down crt"></i></button>
<div id="list1" className="dropdown-check-list display-none" tabIndex="100">
  
  <ul className="items">
  <hr />
  <span className="status">Status</span>
    <li><input className="option" type="checkbox" value="All" />&nbsp;&nbsp;&nbsp;All </li>
    <li><input className="option" type="checkbox" value="Active" />&nbsp;&nbsp;&nbsp;Active</li>
    <li><input className="option" type="checkbox" value="Upcoming" />&nbsp;&nbsp;&nbsp;Upcoming</li>
    <li><input className="option" type="checkbox" value="Past" />&nbsp;&nbsp;&nbsp;Past</li>
    <hr />
    <span className="level">Level</span>
    <li><input className="option" type="checkbox" value="Easy" />&nbsp;&nbsp;&nbsp;Easy </li>
    <li><input className="option" type="checkbox" value="Medium" />&nbsp;&nbsp;&nbsp;Medium</li>
    <li><input className="option" type="checkbox" value="Hard" />&nbsp;&nbsp;&nbsp;Hard</li>
  </ul>
</div>




     
      </form>
      <div className="filterBar">

      </div>
    </section>
      <div className="challenges">
      <ChallengesStack
        challengeImg={cardImage4}
        challengeTitle="Data Science Bootcamp-Graded Datathon"
        challengeState="Upcoming"
        challengeTime="Starts In"
        timer={timeState}

        
      /><ChallengesStack
        challengeImg={cardImage2}
        challengeTitle="Data Sprint 72 - Butterfly Identification"
        challengeState="Upcoming"
        challengeTime="Starts In"
        timer={timeState}

        
      /><ChallengesStack
        challengeImg={cardImage3}
        challengeTitle="Data Sprint 71 - Weather Recognition"
        challengeState="Active"
        challengeTime="Starts In"
        timer={timeState}

        
      /><ChallengesStack
        challengeImg={cardImage5}
        challengeTitle="Data Sprint 70 - Airline Passenger Satisfaction"
        challengeState="Active"
        challengeTime="Starts In"
        timer={timeState}

        
      /><ChallengesStack
        challengeImg={cardImage6}
        challengeTitle="Engineering Graduates Employment Outcomes"
        challengeState="Past"
        challengeTime="Starts In"
        timer={timeState}

        
      /><ChallengesStack
        challengeImg={cardImage1}
        challengeTitle="Travel Insurance Claim Prediction"
        challengeState="Past"
        challengeTime="Starts In"
        timer={timeState}

        
      />
      
      </div>
      
        

    </>
    
}
export default Challenges;