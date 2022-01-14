import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch ,useHistory} from "react-router-dom";
import About from "./About";
import Home from "../views/Home";

import Services from '../Components/Services/ServicesContainer'

import styles from "../styles/navbar.module.css";
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg';
import {Grid , AppBar} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



import NotFound from './NotFound/NotFound';
import ComingSoon from "./ComingSoon/ComingSoon";

function Navbar() {
  const [hamb, setHamb] = useState(false);
  const [showDropDrown,setShowDropDown] = useState(false);
  const path = useHistory();

  const hamburgerMenuHandler = () => {
    console.log("clicked");
    setHamb(!hamb);
  };
  const dropDrownHandler = ()=>{
      setShowDropDown(!showDropDrown);
  }
 
  return (
    <>
    <Grid>

    <Grid item md ={12}>
      <nav className={styles["nav-bar"]}>
        <Link to="/about">About Us</Link>
        <div id={styles["services"]}>
        <Link onClick={dropDrownHandler} to="#">Services</Link>
       {showDropDrown && <ul className={showDropDrown?styles["active"]:styles["dropdown"]}>
          <li onClick={dropDrownHandler}><Link to="/SEO"> SEO </Link> </li>
          <li onClick={dropDrownHandler}><Link to="SMM">SMM</Link></li>
          <li onClick={dropDrownHandler}><Link to="/Graphic Designing">Graphic Designing</Link></li>
          <li onClick={dropDrownHandler}><Link to="/Web Development">Web Development</Link></li>
          <li onClick={dropDrownHandler}><Link to="/Website Design">Website Design</Link></li>
          <li onClick={dropDrownHandler}><Link to="/App Development">App Developement</Link></li>
          <li onClick={dropDrownHandler}><Link to="/Content writing">Content Writing</Link></li>
          <li onClick={dropDrownHandler}><Link to="/Advertising">Advertising</Link></li>
        </ul>}
        </div>
        <Link to="/portfolio">Portfolio</Link>

        <Link id={styles["home"]} to="/">Home</Link>

        <Link to="/blogs">Blogs</Link>
        <Link to="/contact-us">Contact Us</Link>
        <a className={styles.request__quote__btn} href="https://calendly.com/foster-digital-services/15-minute-free-consultation-call?month=2021-10" className={styles.request__quote__btn}>Request Quote</a>

      </nav>

      </Grid>

      {/* Mobile Navigation */}

      {/* <nav className={styles["mob-nav-bar"]}>
      <div className={styles["mob-bar"]}>
        <Link className={styles["mob__logo"]} to="/" onClick={()=>{setHamb(false)}}> <img src="./allImages/FDS.png"/></Link>
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
        <a href="https://calendly.com/foster-digital-services/15-minute-free-consultation-call?month=2021-10" className={styles.request__quote__btn}>Request Quote</a>
          
        </div>
      </nav> */}

      <Grid item xs={12}>
      <AppBar>

      </AppBar>

      </Grid>
    </Grid>


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <ComingSoon />
        </Route>
        <Route path="/blogs">
          <ComingSoon />
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
        <Route  path="/app development" > 
        <Services/>
        </Route>
        <Route  path="/content writing" > 
        <Services/>
        </Route>
        <Route  path="/advertising" > 
        <Services/>
        </Route>
        <Route path ="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Navbar;
