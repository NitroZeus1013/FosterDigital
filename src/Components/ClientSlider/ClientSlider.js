import React, { useState, useEffect ,useRef} from "react";
import {ImQuotesLeft} from 'react-icons/im'

import Slide from "./Slide";
import "./clientSlider.css";

const clientData = [
  {
    companyName: "Bhagwati",
    comment:
      "Experienced professional designing in 'logo' and official documentation by keeping the industrial standard maintained. Completely satisfied.",
  },
  {
    companyName: "Shikshala",
    comment:
      "Great company to work with. They have an in-depth knowledge of the workings of, Graphics designing, web development, and Google and over time have helped our company to identify the best locations and demographics to place our ads with outstanding graphics. I would highly recommend foster Digital Services for any company that is serious about their graphics and advertising with google",
  },

  {
    companyName: "Magarun",
    comment:
      "I reached out to FDS for design help on a logo and from the start, they were so responsive and timely on their follow-up. They made the whole process very easy and fun! Their turnaround time was impressive and their advice was spot on. I would recommend them to anyone looking for design help! They won’t steer you wrong, their prices are extremely affordable, and you’ll have what you need in no time.",
  },
];

function ClientSlider() {
  const [current, setCurrent] = useState(0);
  
  const prev = () => {
    console.log("clicked");
    if (current === 0) {
      setCurrent(clientData.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const next = () => {
    
    // console.log(current) some how recieving 0 here as state.
    if (current === clientData.length - 1) setCurrent(0);
    else setCurrent(current + 1);
    // at first re-render state was changed to 1 but after that also we were recieving 0  as stated in above line . So react was not updating it 1 again because its same as previous state.
    // so we need to tell useEffect that state has changed .
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      next();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [current]);

  return (
    <div className="slider--container">
      <h3>Listen from our clients...</h3>

      {clientData.map((val,index)=>{
        return (
        <div className={current===index?"client__slide active":"client__slide"}>
            {current===index&&(
              <div className="clientSlider__content">
              <ImQuotesLeft />
                <h3>{val.comment}</h3>
                <img src="" alt="company logo" />
              </div>
              )}
        </div>
        )
          
      })}
    

      <div className="control--dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default ClientSlider;
