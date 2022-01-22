import React ,{useState,useEffect}from "react";


import Footer from "./Footer";
import "./about.css";
import HR from "./utils/HR";

const data = {
  quote: {
    quo: '"You can’t sell anything if you can’t tell anything.”',
    auth: "–Beth Comstock",
  },
  desc:`Raising a brand is one of the toughest and fulfilling jobs in the world, if you are trying on your own and the one for which you might feel least prepared…………….
  So what?? Don’t disturb yourself and make yourself comfortable because, if FDS is here then why fear?
  What are you waiting for?`,
  image:'./allImages/info.png'
};

function About() {
  


  return (
    <div>
      <div className="service--hero-image">
        <div className="quote">
          <i>
            <p>{data.quote.quo}</p>
          </i>
          <i className="author__name">{data.quote.auth}</i>
        </div>
        <img
          src={data.heroImage ? data.heroImage : "./allImages/seo_main.jpg"}
          alt=""
        />
      </div>

      <div className="services--description">
        <p>Who We Are ?</p>
        <HR/>
        <div className="content">
          <div className="services__description__image">
            <img src={data.image ? data.image : "./allImages/SEOEdited.png"} alt="" />
          </div>
          <div className="description">
            <p>{data.desc}</p>
          </div>
        </div>
        <button className="description__button">Get a Proposal</button>
      </div>

      <div className="vision__mission">
        <div className="vision__image">
          <img src="./allImages/about.png" alt="" />
        </div>
        <div className="vision__content">
          <div className="vision">
            <p className="headers">
              Our Vision <hr />
            </p>
            <p>
              <i>
                "We help every business to get identified in digital universe"
              </i>
            </p>
          </div>

          <div className="mission">
            <p className="headers">
              Our Mission <hr />
            </p>
            <p>
              <i>
                "We are on a mission to foster every business with proven and
                effective digital marketing service to ensure your company
                remains one step ahead of your competitors,now and in the
                future"
              </i>
            </p>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="statistics">
          <p>Our Statistics</p>

          <div className="stat">
            <div className="fig">
              <span>40+</span>
            </div>
            <span>Clients</span>
          </div>
          <div className="stat">
            <div className="fig">
              <span>10+</span>
            </div>
            <span>Industries</span>
          </div>
          <div className="stat">
            <div className="fig">
              <span>9+</span>
            </div>
            <span>Countries</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
