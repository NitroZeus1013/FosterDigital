import React from "react";
import styles from '../styles/homeAbout.module.css';
import aboutImage from '../images/info.png'
function HomeAbout() {
  return (
    <div className={styles["home--about--container"]}>
      <div className={styles["home-about-image"]}>
          <img src={aboutImage} alt="" />
      </div>
      <div className={styles["home--about--content"]}>
        <h3>About Us</h3>
        <main>
          <p>
            Raising a brand is one of the toughest and fulfilling jobs in the
            world, if you are trying on your own and the one for which you might
            feel least prepared…………….
          </p>
          <p>
            So what?? Don’t disturb yourself and make yourself comfortable
            because, <b>if FDS is here then why fear?</b>
          </p>
          <p>
            What are you waiting for?
          </p>
          <button className={styles["home--about--button"]}>Get Proposal </button>
        </main>
      </div>
    </div>
  );
}

export default HomeAbout;
