import React, { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import HR from "../utils/HR";

import Slide from "./Slide";
import "./clientSlider.css";

const clientData = [
  {
    highlight: "Great Company to work with.",
    companyName: "SantraGolie",
    logo: "./allImages/Testimonial/santragolie.png",
    comment:
      "Great marketing agency to work with. Their SEO and Designing team is perfect. You're guaranteed to achieve great results if Foster Digital Services is working for you.",
  },
  {
    highlight: "Great Company to work with.",
    companyName: "Shikshala",
    logo: "./allImages/Testimonial/Shikshala.png",
    comment:
      "Great company to work with. They have an in-depth knowledge of the workings of, Graphics designing, web development, and Google and over time have helped our company to identify the best locations and demographics to place our ads with outstanding graphics. I would highly recommend foster Digital Services for any company that is serious about their graphics and advertising with google",
  },

  {
    highlight: "Great Company to work with.",
    companyName: "Magarun",
    logo: "./allImages/Testimonial/Magarun.png",
    comment:
      "I reached out to FDS for design help on a logo and from the start, they were so responsive and timely on their follow-up. They made the whole process very easy and fun! Their turnaround time was impressive and their advice was spot on. I would recommend them to anyone looking for design help! They won’t steer you wrong, their prices are extremely affordable, and you’ll have what you need in no time.",
  },
  {
    highlight: "Great Company to work with.",
    companyName: "SubSocial",
    logo: "./allImages/Testimonial/Subsocial.png",
    comment:
      "Working with FDS to build our social media presence has been really straightforward and hassle-free. We’ve developed our social media strategy together, drawing on their expertise and incorporating our ideas so that the end results are really awesome.",
  }
];

function ClientSlider() {
  const [current, setCurrent] = useState(0);




  const dotsController  = (slide) =>{
    setCurrent(slide);
  }
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

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     next();
  //   }, 10000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [current]);

  return (
    <div className="slider--container">
      <h3>
        Listen from our clients... <HR width={150} />
      </h3>

      {clientData.map((val, index) => {
        return (
          <div
            key={`slide${index}`}
            className={
              current === index ? "client__slide active" : "client__slide"
            }
          >
            {current === index && (
              <div className="clientSlider__content">
                <div className="client__highlight">
                  <img
                    src="./allImages/Testimonial/Inverted-comma.png"
                    className="inverted--comma"
                  />
                  <span>
                    <i>"{val.highlight}"</i>
                  </span>
                </div>
                <p>{val.comment}</p>
                <img
                  src={val.logo}
                  alt="company logo"
                  className="company--logo"
                />
              </div>
            )}
          </div>
        );
      })}

      <div className="control--dots">
        <div
          
          onClick={() => {
            setCurrent(0);
          }}
          className={current==0?"dot dot--active":"dot"}
        ></div>
        <div
          
          onClick={() => {
            setCurrent(1);
          }}
          className={current==1?"dot dot--active":"dot"}
        ></div>
        <div
          
          onClick={() => {
            setCurrent(2);
          }}
          className={current==2?"dot dot--active":"dot"}
        ></div>
        <div
          
          onClick={() => {
            setCurrent(3);
          }}
          className={current==3?"dot dot--active":"dot"}
        ></div>
      </div>
    </div>
  );
}

export default ClientSlider;
