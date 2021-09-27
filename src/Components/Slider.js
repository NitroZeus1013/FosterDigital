import React, { useState } from "react";
import "../styles/slider.css";
import {IoChevronBackOutline , IoChevronForwardOutline} from 'react-icons/io5'

import image1 from "../images/Image1.jpg";
import image2 from "../images/Image2.jpg";
import image3 from "../images/Image3.jpg";
const data = [
  {
    image: image1,
    slide: 0,
  },
  {
    image: image2,
    slide: 1,
  },
  {
    image: image3,
    slide: 2,
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    console.log("clicked");
    if (current === 0) {
      setCurrent(data.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const next = () => {
    console.log("clicked next");

    if (current === data.length-1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    // here we are trying to match for any slide which has value === current
    <div className="slider">

      <button className="left-control controls" onClick={prev}>
       <IoChevronBackOutline/>
      </button>
     
      {data.map((val) => {
        return (
          <div className={val.slide === current ? "slide active" : "slide"}>
            {val.slide === current && (
              <img className="image" src={val.image} alt="image1"></img>
            )}
          </div>
        );
      })}


      <button className="right-control controls" onClick={next}>
        <IoChevronForwardOutline />
      </button>

    </div>
  );
}

export default Slider;
