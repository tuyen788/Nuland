import React, { Component, useState } from "react";
import "../../App.css";
import CardItem from "../CardItem";
import "../Poster.css";
import { Button } from "../Button";
import Poster from "../Poster";
import { variables } from "../../Variables.js";
import SlideShow from "../SlideShow";
// function Listings() {
//   return (
//     <div>
//       <div className="listings">
//         <h1>LISTINGS</h1>
//         <p>Current and Future Available Accomodations</p>
//       </div>
//       <Poster />
//     </div>
//   );
// }
// export default Listings;

export default class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
        listings: [],
        props
    };
  }

  refreshList() {
    fetch("api/Listings")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listings: data });
      });
      //let temp = [];
      //const data = fetch("api/Listings").then((value) => value.json())
      //    .then((result) => {
      //        result.map((obj) => {
      //            temp.push(obj);
      //        })
      //    });
      
      //this.setState({ listings: temp });
      //console.log(this.listings);

  }

  componentDidMount() {
    this.refreshList();

  }

  render() {
    const { listings } = this.state;

  

    let data = [];
    listings.map((list) => {
        data.push({ image: `Photos/${list.PhotoFileName1}` });
        data.push({ image: `Photos/${list.PhotoFileName2}` });
        data.push({ image: `Photos/${list.PhotoFileName3}` });
        data.push({ image: `Photos/${list.PhotoFileName4}` });
        data.push({ image: `Photos/${list.PhotoFileName5}` });
      list.data = data;
      data = [];
    });

      

    return (
      <div>
        <div className="listings">
          <h1>LISTINGS</h1>
          
        </div>

        <div>
          <div className="posters__container">
            <div className="posters__wrapper">
              <ul className="posters__items">
                {listings.map((list) => ( list.Status? (
                  <div className="poster__item" key={list.ListingID}>
                    {/* <div className="poster__picture">
                      <CardItem
                        src={variables.PHOTO_URL + list.PhotoFileName}
                        text={`${list.Type} in ${list.Location}`}
                        label={list.Type}
                      />
                    </div> */}
                    <SlideShow data={list.data} />
                    <div className="poster__info">
                      <h3>
                        {list.Type} in {list.City}, AZ
                      </h3>
                      <p>
                        <i class="fas fa-map-marker-alt"></i> 
                        {" "}{list.City}, AZ, {list.Zipcode}
                      </p>
                      <p>Available date: {list.AvailableDate}</p>
                      <p>Price: {list.Price}</p>
                      <p>Deposit: {list.Deposit}</p>
                      <p>Area: {list.Area} sqft</p>
                      <p>Amenities: {list.Amenities}</p>
                      <p>Policy: {list.Policy}</p>
                      <p>For more information, visit <a target="_blank" href="/apply">Before You Apply</a></p>
                      <div className="hero-btns">
                        {/* <Button
                          className="btns"
                          buttonStyle="btn--primary"
                          buttonSize="btn--medium"
                        >
                          LEARN MORE <i class="fas fa-info-circle"></i>
                        </Button> */}
                      </div>
                      <a
                        href={list.Link}
                        target="_blank"
                        style={{ marginLeft: "65%" }}
                      >
                        <button className="btn btn--primary btn--medium">
                          APPLY NOW <i class="fas fa-edit"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                ):null))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
