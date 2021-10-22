import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";

import Services from '../Components/Services/ServicesContainer'

import styles from "../styles/navbar.module.css";
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'

function Navbar() {
  const [hamb, setHamb] = useState(false);
  const [showDropDrown,setShowDropDown] = useState(false);
  const hamburgerMenuHandler = () => {
    console.log("clicked");
    setHamb(!hamb);
  };
  const dropDrownHandler = ()=>{
      setShowDropDown(!showDropDrown);
  }
  return (
    <>
      <nav className={styles["nav-bar"]}>
        <Link to="/about">About Us</Link>
        <div id={styles["services"]}>
        <Link onClick={dropDrownHandler} to="#">Services</Link>
        <ul className={showDropDrown?styles["active"]:styles["dropdown"]}>
          <li onClick={dropDrownHandler}><Link to="/SEO"> SEO </Link> </li>
          <li onClick={dropDrownHandler}><Link to="SMM">SMM</Link></li>
          <li onClick={dropDrownHandler}><Link to="Graphic Designing">Graphic Designing</Link></li>
          <li onClick={dropDrownHandler}><Link to="Web Development">Web Development</Link></li>
          <li onClick={dropDrownHandler}><Link to="Website Design">Website Design</Link></li>
          <li onClick={dropDrownHandler}><Link to="App Developement">App Developement</Link></li>
          <li onClick={dropDrownHandler}><Link to="Content writing">Content Writing</Link></li>
          <li onClick={dropDrownHandler}><Link to="Advertising">Advertising</Link></li>
        </ul>
        </div>
        <Link to="/portfolio">Portfolio</Link>

        <Link id={styles["home"]} to="/">Home</Link>

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
        <Route  path="/seo" > 
        <Services/>
        </Route>
        <Route  path="/smm" > 
        <Services/>
        </Route>
        <Route  path="/graphic designing" > 
        <Services/>
        </Route>
        <Route  path="/web development" > 
        <Services/>
        </Route>
        <Route  path="/website design" > 
        <Services/>
        </Route>
        <Route  path="/app developement" > 
        <Services/>
        </Route>
        <Route  path="/content writing" > 
        <Services/>
        </Route>
        <Route  path="/advertising" > 
        <Services/>
        </Route>
      </Switch>
    </>
  );
}

export default Navbar;
