import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo from "../images/nuland-logo-big.png";
function Footer() {
  return (
    <div className="footer-container">
      {/*<section className="footer-subscription">*/}
      {/*  <p className="footer-subscription-heading">*/}
      {/*    Join the Nuland newsletter to receive notifications about newest*/}
      {/*    listings.*/}
      {/*  </p>*/}
      {/*  <p className="footer-subscription-text">*/}
      {/*    You can unsubscribe at any time.*/}
      {/*  </p>*/}
      {/*  <div className="input-areas">*/}
      {/*    <form>*/}
      {/*      <input*/}
      {/*        className="footer-input"*/}
      {/*        name="email"*/}
      {/*        type="email"*/}
      {/*        placeholder="Your Email"*/}
      {/*      />*/}
      {/*      <Button buttonStyle="btn--outline">Subscribe</Button>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/apply">Policies</Link>
            <Link to="/">FAQs</Link>
          </div>
          {/* <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div> */}
        </div>
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Find Us</h2>
            <a href="https://www.facebook.com/NuLandCom">Facebook</a>
            <a href="mailto:homlandllc@outlook.com">Email</a>
            <Link to="/admin">Admin</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            {/* <Link to="/" className="social-logo">
              Nuland <i className="fas fa-home" />
            </Link> */}
            <Link to="/" className="social-logo">
              <img className="social-logo-img" src={logo} />
            </Link>
          </div>
          <small className="website-rights">Nuland &copy; 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/NuLandCom"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="social-icon-link email"
              href="mailto:NulandRE@outlook.com"
              target="_blank"
              aria-label="Email"
            >
               <i class="far fa-envelope"></i>
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
