import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img9 from "../images/img-9.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img8 from "../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these GREAT homes!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Single family house in Mesa, AZ"
              label="Single family"
              path="/listings"
            />
            <CardItem
              src={img2}
              text="Duplex studios in Tempe, AZ"
              label="Duplex"
              path="/listings"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Townhouse near Downtown Phoenix"
              label="Townhouse"
              path="/listings"
            />
            <CardItem
              src={img4}
              text="Single family house in Chandler, AZ"
              label="Single family"
              path="/listings"
            />
            <CardItem
              src={img8}
              text="Townhouse near Downtown Phoenix"
              label="Townhouse"
              path="/listings"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
