import React from "react";
import Card from "./Card";

import "./allCards.css";

const cardData = [
  {
    image: "allImages/SEO.jpg",
    logo: "",
    title: "SEO",
    description:
      " Crush your competitors through search engines / Content is king, SEO is supreme",
    action: "",
  },
  {
    image: "allImages/SMM.jpg",
    logo: "",
    title: "SMM",
    description:
      "Our dynamic social media marketing plan brings you remarkable results.",
    action: "",
  },
  {
    image: "allImages/graphic.jpeg",
    logo: "",
    title: "Graphic Designing",
    description: "We Do Design Differently",
    action: "",
  },
  {
    image: "allImages/web dev.jpeg",
    logo: "",
    title: "Web Developement",
    description: "Open up your business to new possibilities.",
    action: "",
  },
  {
    image: "allImages/web design.jpeg",
    logo: "",
    title: "Website Design",
    description: "Attract customers like never before",
    action: "",
  },
  {
    image: "allImages/app.jpeg",
    logo: "",
    title: "App",
    description: "Every app is a new opportunity to make a difference",
    action: "",
  },
  {
    image: "allImages/content.jpeg",
    logo: "",
    title: "Content",
    description: "Good first impressions.... are good for business",
    action: "",
  },
  {
    image: "allImages/adv.jpg",
    logo: "",
    title: "Adverising",
    description: "Give your brand the due attention",
    action: "",
  },
];

function AllCards() {
  return (
    <div className="card--container">
    <h3>Fostering Brands with....</h3>
      <div className="all--cards">
        {cardData.map((card) => {
          return (
            <Card
              title={card.title}
              image={card.image}
              logo={card.logo}
              description={card.description}
              action={card.action}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllCards;
