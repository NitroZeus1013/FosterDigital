import React from "react";
import styles from "../styles/homeAbout.module.css";
import HR from './utils/HR';
function HomeAbout() {
  return (
    <div className={styles["home--about--container"]}>
     


      <h3>About Us
      <HR width={90}/></h3>
    

      <div className={styles["home--about"]}>
      <div className={styles["home-about-image"]}>
        <img src="./allImages/About-us.png" alt="" />
      </div>

      <div className={styles["home--about--content"]}>
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
          <p>What are you waiting for?</p>
          
        </main>
      </div>
      </div>
      <button className={styles["home--about--button"]}>
            Get Proposal{" "}
          </button>
    </div>
  );
}

export default HomeAbout;
