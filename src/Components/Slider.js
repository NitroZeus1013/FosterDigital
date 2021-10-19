import React, { useState } from "react";
import "../styles/slider.css";
import {IoChevronBackOutline , IoChevronForwardOutline} from 'react-icons/io5'


const data = [
  {
    image: "/allImages/Image1.jpg",
    tagline:{p1:"Foster your Business",p2:"with our Digital Services"},
    btnTitle:"Get a proposal",
    slide: 0,
  },
  {
    image: "/allImages/Image2.jpg",
    tagline:{p1:"If FDS is here,",p2: "then why fear?"},
    btnTitle:"Limited time offer",
    slide: 1,
  },
  {
    image: "/allImages/Image3.jpg",
    tagline:{p1:"Once Driven," ,p2:"Forever Digital"},
    btnTitle:"Get a consultation now",
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
     
      {data.map((val,index) => {
        return (
          <div key={index} className={val.slide === current ? "slide active" : "slide"}>
          <div className="image__tagline">
              <p>{val.tagline.p1}</p>
              <p>{val.tagline.p2}</p>
              <button className="slider__btn">{val.btnTitle}</button>
            </div>
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
