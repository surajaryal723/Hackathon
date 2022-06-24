import React from "react";
import Header from "./Header";
import Home from "./Home";
import Form from "./Form"
import Edit from "./Edit"
import Overview from "./Overview";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return <BrowserRouter>
      <Header/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/create" element={<Form/>}/>
        </Routes>
        <Routes>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
        <Routes>
          <Route path="/overview" element={
            <Overview
        date="17th Jun'22 09:00 PM"
        title="Data Sprint 72 - Butterfly Identification"
        shortdesc="Identify the class to which each butterfly belongs to"
        firstParagraph='Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.'
        secondParagraph='An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.'
        thirdParagraph='Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.'
        />
          }/>
        </Routes>
        
        
        
        
        
        
        
  </BrowserRouter>
    

  
      
       

        
      
       
      
   
    
  
}

export default App;

 

