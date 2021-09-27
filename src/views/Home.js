import React from "react";
import AllCards from "../Components/Cards/AllCards";
import ClientSlider from "../Components/ClientSlider/ClientSlider";
import HomeAbout from "../Components/HomeAbout";
import Slider from "../Components/Slider";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

function Home() {
  return (
    <>
      <Slider />
      <HomeAbout />
      <AllCards />
      <WhyChooseUs />
      <ClientSlider />
    </>
  );
}

export default Home;
