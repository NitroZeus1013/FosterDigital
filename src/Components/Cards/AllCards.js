import React from "react";
import Card from "./Card";
import Service from "../Services/Service";

import { Link,Route,Switch } from "react-router-dom";


import "./allCards.css";

const cardData = [
  {
    image: "allImages/SEO.jpg",
    logo: "allImages/icons/seo.png",
    title: "SEO",
    description:
      " Crush your competitors through search engines / Content is king, SEO is supreme",
    action: "",
  },
  {
    image: "allImages/SMM.jpg",
    logo: "allImages/icons/SMM.png",
    title: "SMM",
    description:
      "Our dynamic social media marketing plan brings you remarkable results.",
    action: "",
  },
  {
    image: "allImages/graphic.jpeg",
    logo: "allImages/icons/graphic.png",
    title: "Graphic Designing",
    description: "We Do Design Differently",
    action: "",
  },
  {
    image: "allImages/web dev.jpeg",
    logo: "allImages/icons/web-dev.png",
    title: "Web Development",
    description: "Open up your business to new possibilities.",
    action: "",
  },
  {
    image: "allImages/web design.jpeg",
    logo: "allImages/icons/web-design.png",
    title: "Website Design",
    description: "Attract customers like never before",
    action: "",
  },
  {
    image: "allImages/app.jpeg",
    logo: "allImages/icons/app-dev.png",
    title: "App Developement",
    description: "Every app is a new opportunity to make a difference",
    action: "",
  },
  {
    image: "allImages/content.jpeg",
    logo: "allImages/icons/content.png",
    title: "Content Writing",
    description: "Good first impressions.... are good for business",
    action: "",
  },
  {
    image: "allImages/adv.jpg",
    logo: "allImages/icons/ads.png",
    title: "Advertising",
    description: "Give your brand the due attention",
    action: "",
  },
];

function AllCards() {

  const onClickHandler =(path)=>{

  }
  return (
    <div className="card--container">
    <h3>Fostering Brands with....</h3>
      <div className="all--cards">
        {cardData.map((card) => {
          return (
           
           <Link to={`/${card.title.toLowerCase()}`}>


            <Card
              title={card.title}
              image={card.image}
              logo={card.logo}
              description={card.description}
              action={card.action}
            />
           
           </Link>
        
          );
        })}
      </div>
      <Switch>
     
      </Switch>

    </div>
  );
}

export default AllCards;
