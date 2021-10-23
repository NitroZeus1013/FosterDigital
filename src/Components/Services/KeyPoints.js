import React from "react";

function KeyPoints({keyp ,title}) {
  return <div className="services--key-points">
      <div className="man__image">
        <p>5 Reasons to</p> 
        <p>invest in {title}</p>
        <img src="./allImages/manEdited.png" alt="" />
      </div>
      <div className="keypoints">
      {
        keyp.map((pt,index)=>{
          return (<div 
            key={index}
          className="point">
            <div className="number">{index+1}</div>
            <h3>{pt.heading}</h3>
            <p className="keypoint__content">{pt.content}</p>
          </div>)
        })
      }
          
      </div>
  </div>;
}

export default KeyPoints;
