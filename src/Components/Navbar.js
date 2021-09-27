import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import logo from "../images/FDS-circle.png";

import styles from "../styles/navbar.module.css";
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'




function Navbar() {
  const [hamb, setHamb] = useState(false);
  const hamburgerMenuHandler = () => {
    console.log("clicked");
    setHamb(!hamb);
  };
  return (
    <Router>
      <nav className={styles["nav-bar"]}>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>

        <Link to="/">Home</Link>

        <Link to="/blogs">Blogs</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/products">Products</Link>
      </nav>

      {/* Mobile Navigation */}

      <nav className={styles["mob-nav-bar"]}>
      <div className={styles["mob-bar"]}>
        <Link className={styles["logo"]} to="/">Home</Link>
        {hamb ? (
          <button className= {styles["menu-button"]}  onClick={hamburgerMenuHandler}>
            <CgClose/>
          </button>
        ) : (
          <button  className= {styles["menu-button"]} onClick={hamburgerMenuHandler} >
            <GiHamburgerMenu/>
          </button>
        )}
      </div>

        <div  className={hamb?styles["show-mob-menu"]:styles['hide-mob-menu']} onClick={hamburgerMenuHandler}>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>

          <Link to="/blogs">Blogs</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/products">Products</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
