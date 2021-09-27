import React from "react";

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
  return (
    <div className="slider--container">
      <div className="slide--container">
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo odit
          distinctio consequatur similique, totam ipsa. Maiores id tempore
          ducimus. Delectus sunt deleniti veniam odit ratione explicabo
          obcaecati nam blanditiis doloribus tempore, repudiandae neque quod
          voluptatibus qui saepe nulla exercitationem mollitia consectetur nisi.
          Numquam omnis iste placeat, sit modi cum! Deleniti
        </h3>
      </div>
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
