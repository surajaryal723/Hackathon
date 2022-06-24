import React from "react";
export default function DataStack(props){
   return <div className="dataWrapper">
    <div className="inner">
    <img src={props.source} alt="" className="dataImg" />
    <div className="dataCountDesc">
    <p className="dataCount">{props.dataCount}</p>
    <p className="dataDescription">{props.description}</p>
    </div>
    </div>
    </div>
}