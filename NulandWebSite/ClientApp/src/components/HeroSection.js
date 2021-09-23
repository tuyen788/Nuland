import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="../videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>Find Your Home in Arizona</h1>
      <p>Nuland is with you every step of the way</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          destination="apply"
        >
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          destination="listings"
        >
          SEE LISTINGS <i className="fas fa-images" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
