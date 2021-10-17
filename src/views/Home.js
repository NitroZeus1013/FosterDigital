import React from "react";
import AllCards from "../Components/Cards/AllCards";
import ClientSlider from "../Components/ClientSlider/ClientSlider";
import Footer from "../Components/Footer";
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
      <Footer />
    </>
  );
}

export default Home;
