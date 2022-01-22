import React, { useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import About from "./About";
import Home from "../views/Home";

import Services from "../Components/Services/ServicesContainer";

import styles from "../styles/navbar.module.css";

import Box from "@mui/material/Box";
import { Grid, AppBar, ListItemButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import NotFound from "./NotFound/NotFound";
import ComingSoon from "./ComingSoon/ComingSoon";

function Navbar() {
  const [services, setServices] = useState(false);
  const [hambEl, setHambEl] = useState(false);
  const [showDropDrown, setShowDropDown] = useState(false);
  const path = useHistory();
  const open = Boolean(hambEl);

  const handleServicesDropdown = (e) => {
    e.stopPropagation();
    setServices(!services);
  };

  const hamburgerMenuHandler = (e) => {
    console.log("clicked");
    setHambEl(true);
  };

  const handleClose = () => {
    setHambEl(false);
  };

  const dropDrownHandler = () => {
    setShowDropDown(!showDropDrown);
  };

  return (
    <>
      <Grid>
        <Grid item md={12}>
          <nav className={styles["nav-bar"]}>
            <Link to="/about">About Us</Link>
            <div id={styles["services"]}>
              <Link onClick={dropDrownHandler} to="#">
                Services
              </Link>
              {showDropDrown && (
                <ul
                  className={
                    showDropDrown ? styles["active"] : styles["dropdown"]
                  }
                >
                  <li onClick={dropDrownHandler}>
                    <Link to="/SEO"> SEO </Link>
                  </li>
                  <li onClick={dropDrownHandler}>
                    <Link to="SMM">SMM</Link>
                  </li>
                  <li onClick={dropDrownHandler}>
                    <Link to="/Graphic Designing">Graphic Designing</Link>
                  </li>
                  <li onClick={dropDrownHandler}>
                    <Link to="/Web Development">Web Development</Link>
                  </li>
                  <li onClick={dropDrownHandler}>
                    <Link to="/Website Design">Website Design</Link>
                  </li>
                  <li onClick={dropDrownHandler}>
                    <Link to="/App Development">App Developement</Link>
                  </li>
                  <li onClick={dropDrownHandler}>
                    <Link to="/Content writing">Content Writing</Link>
                  </li>
                  <li onClick={dropDrownHandler}>
                    <Link to="/Advertising">Advertising</Link>
                  </li>
                </ul>
              )}
            </div>
            <Link to="/portfolio">Portfolio</Link>

            <Link id={styles["home"]} to="/">
              Home
            </Link>

            <Link to="/blogs">Blogs</Link>
            <Link to="/contact-us">Contact Us</Link>
            <a
              className={styles.request__quote__btn}
              href="https://calendly.com/foster-digital-services/15-minute-free-consultation-call?month=2021-10"
              className={styles.request__quote__btn}
            >
              Request Quote
            </a>
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

        <Grid item xs={12} className={styles["mob-nav-bar"]}>
          <AppBar 
          position="static" 
        >
            <Toolbar className={styles['app-bar']}>
              <IconButton
                size="large"
                edge="start"
                sx={{ mr: 2 }}
                onClick={hamburgerMenuHandler}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MenuIcon />
              </IconButton>

              <IconButton>
              <Link className={styles["mob__logo"]} to="/" onClick={handleClose}> <img src="./allImages/FDS.png"/></Link>
              </IconButton>

              {/* <Menu
                id="basic-menu"
                anchorEl={hambEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>SEO</MenuItem>
                <MenuItem onClick={handleClose}>SMM</MenuItem>
                <MenuItem onClick={handleClose}>services</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Request</MenuItem>
              </Menu> */}
            </Toolbar>
          </AppBar>

          <Drawer anchor={"left"} open={hambEl} onClose={handleClose}>
            <Box sx={{ width: 250 }} onClick={handleClose}>
              <List className={styles["show-mob-menu"]}>
                <ListItem button key={"about"}>
                  <ListItemText>
                    <Link to="/about">About Us</Link>
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  key={"services"}
                  onClick={handleServicesDropdown}
                >
                  <ListItemText><Link to ="/">Services</Link></ListItemText>
                  {services ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

              {/* Services Collapsing menu start */}
                <Collapse in={services} timeout="auto" unmountOnExit>
                  <List
                    onClick={handleClose}
                    component="div"
                    disablePadding
                    sx={{ pl: 4 }}
                  >
                    <ListItemButton>
                      <ListItemText><Link to="/SEO"> SEO </Link></ListItemText>
                    </ListItemButton>
                    
                    <ListItemButton>
                      <ListItemText><Link to="SMM">SMM</Link></ListItemText>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemText><Link to="/Graphic Designing">Graphic Designing</Link></ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText><Link to="/Web Development">Web Development</Link></ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText><Link to="/Website Design">Website Design</Link></ListItemText>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemText><Link to="/App Development">App Developement</Link></ListItemText>
                    </ListItemButton>

                    

                    <ListItemButton>
                      <ListItemText> <Link to="/Content writing">Content Writing</Link></ListItemText>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemText><Link to="/Advertising">Advertising</Link></ListItemText>
                    </ListItemButton>

{/* 
                    <ListItemButton>
                      <ListItemText></ListItemText>
                    </ListItemButton> */}
                  </List>
                </Collapse>
              {/* Services Collapsing menu end */}

                <ListItem button key={"portfolio"}>
                  <ListItemText>
                    <Link to="/portfolio">Portfolio</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button key={"blogs"}>
                  <ListItemText>
                    <Link to="/blogs">Blogs</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button key={"contact-us"}>
                  <ListItemText>
                    <Link to="/contact-us">Contact Us</Link>
                  </ListItemText>
                </ListItem>
                <ListItem button key={"request"}>
                  <ListItemText>
                    <a
                      href="https://calendly.com/foster-digital-services/15-minute-free-consultation-call?month=2021-10"
                      className={styles.request__quote__btn}
                    >
                      Request Quote
                    </a>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Drawer>
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
        <Route path="/seo">
          <Services />
        </Route>
        <Route path="/smm">
          <Services />
        </Route>
        <Route path="/graphic designing">
          <Services />
        </Route>
        <Route path="/web development">
          <Services />
        </Route>
        <Route path="/website design">
          <Services />
        </Route>
        <Route path="/app development">
          <Services />
        </Route>
        <Route path="/content writing">
          <Services />
        </Route>
        <Route path="/advertising">
          <Services />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Navbar;
