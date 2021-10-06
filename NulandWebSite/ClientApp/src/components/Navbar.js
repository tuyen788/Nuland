import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import logo from "../images/nuland-logo-big.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //sign up button won't show again when refresh
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NuLand <i className="fas fa-home"></i>
          </Link> */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="navbar-logo-img" src={logo} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/*<li className="nav-item">*/}
            {/*  <Link to="/" className="nav-links" onClick={closeMobileMenu}>*/}
            {/*    Home*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className="nav-item">
              <Link
                to="/listings"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                    Contact Us
                </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apply"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Before You Apply
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" destination="apply">
                Before You Apply
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
