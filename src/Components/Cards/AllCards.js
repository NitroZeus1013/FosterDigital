import React , {useEffect} from "react";
import Card from "./Card";
import Service from "../Services/Service";
import { Link,Route,Switch } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


import HR from '../utils/HR';
import "./allCards.css";

const cardVariants = {
  visible:{
     scale:1,
     opacity:1,
     transition:{duration:.5}
  },
  hidden:{
      scale:.5,
      opacity:0
  }
}


const cardData = [
  {
    image: "./allImages/SEO.jpg",
    logo: "./allImages/icons/seo.png",
    title: "SEO",
    description:
      " Crush your competitors through search engines / Content is king, SEO is supreme",
    action: "",
  },
  {
    image: "./allImages/SMM.jpg",
    logo: "./allImages/icons/SMM.png",
    title: "SMM",
    description:
      "Our dynamic social media marketing plan brings you remarkable results.",
    action: "",
  },
  {
    image: "./allImages/graphic.jpg",
    logo: "./allImages/icons/graphic.png",
    title: "Graphic Designing",
    description: "We Do Design Differently",
    action: "",
  },
  {
    image: "./allImages/web-dev.jpg",
    logo: "./allImages/icons/web-dev.png",
    title: "Web Development",
    description: "Open up your business to new possibilities.",
    action: "",
  },
  {
    image: "./allImages/web-design.jpg",
    logo: "./allImages/icons/web-design.png",
    title: "Website Design",
    description: "Attract customers like never before",
    action: "",
  },
  {
    image: "./allImages/app.jpg",
    logo: "./allImages/icons/app-dev.png",
    title: "App Development",
    description: "Every app is a new opportunity to make a difference",
    action: "",
  },
  {
    image: "./allImages/content.jpg",
    logo: "./allImages/icons/content.png",
    title: "Content Writing",
    description: "Good first impressions.... are good for business",
    action: "",
  },
  {
    image: "./allImages/adv.jpg",
    logo: "./allImages/icons/ads.png",
    title: "Advertising",
    description: "Give your brand the due attention",
    action: "",
  },
];

function AllCards() {
  const control = useAnimation();
    const [ref,inView] = useInView();

    useEffect(()=>{
        if(inView)
        control.start('visible')

    },[control,inView])

  const onClickHandler =(path)=>{

  }
  return (
    <div className="card--container">
    <h3>Fostering Brands With....<HR width={170}/></h3>
      <motion.div className="all--cards"
      animate={control}
      initial="hidden"
      variants={cardVariants}
      ref={ref}
      >
        {cardData.map((card,index) => {
          return (
           
           <Link key={index} to={`/${card.title.toLowerCase()}`}>


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
      </motion.div>
      <Switch>
     
      </Switch>

    </div>
  );
}

export default AllCards;
