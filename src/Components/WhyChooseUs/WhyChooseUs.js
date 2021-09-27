import React from "react";
import Feature from "./Feature";

import "./whyChooseUs.css";


const featureData = [
  {
    logo: "allImages/Clarity.png",
    title: "Clarity & Transparency",
    content:
      "To gain the trust of anyone, clarity and transparency is a must. Hence, we share all the details of the activities that we perform on our account including, member logged, daily reporting, billing, actions taken on account while running a campaign, and accounts of every penny. We make it clear and simple to our clients that they can ask their questions and receive a satisfactory answer.",
  },
  {
    logo: "allImages/you-talk.png",
    title: "You Talk, We Listen",
    content:
      "As a digital marketing agency, we strive to understand our client’s business goals first. Then all decisions are made with those goals in mind. A shiny new website is worthless if it doesn’t help you reach your goals. You talk, we listen… then we throw in lots of ideas for improvement.",
  },
  {
    logo: "allImages/Integration.png",
    title: "We Value Integrity",
    content:
      "We believe in doing business with honesty, integrity, and a sincere heart for others. We aren’t going to sell you something you don’t need. We won’t lie to get your business. We will treat you with kindness and respect. The way it should be (and far too often is not).",
  },
  {
    logo: "allImages/Expert.png",
    title: "Business Expertise",
    content:
      "Every project is an identity for us. So, we take extra effort and care to deploy it to perfection. It is the unique way in which we extend our relation with the clients. Hence, we retain the finest business interactions possible with our clients.",
  },
];

function WhyChooseUs() {
  return (
    <div className="feature--main-container">
        <img src="allImages/hexagon.jpg" alt="background-image" />
      {featureData.map((feature) => {
        return (
          <Feature
            title={feature.title}
            logo={feature.logo}
            content={feature.content}
          />
        );
      })}
    </div>
  );
}

export default WhyChooseUs;
