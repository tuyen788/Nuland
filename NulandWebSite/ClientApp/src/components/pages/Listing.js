import React from "react";
import "../../App.css";
import SlideShow from "../SlideShow";
import "../Poster.css"


function Listing(props) {
    console.log(props.location.state.data);
    return (
        <div>
            <div className="posters__container">
                <div className="posters__wrapper">
                   
                <div className="poster__item" key={props.location.state.ListingID}>
                    
                        <div><SlideShow data={props.location.state.data} /></div>
                    <div className="poster__info">
                        <h3>
                            {props.location.state.Type} in {props.location.state.City}, AZ
                        </h3>
                        <p>
                            <i class="fas fa-map-marker-alt"></i>
                            {" "}{props.location.state.City}, AZ, {props.location.state.Zipcode}
                        </p>
                        <p>Available date: {props.location.state.AvailableDate}</p>
                        <p>Price: {props.location.state.Price}</p>
                        <p>Deposit: {props.location.state.Deposit}</p>
                        <p>Area: {props.location.state.Area} sqft</p>
                        <p>Amenities: {props.location.state.Amenities}</p>
                        <p>Policy: {props.location.state.Policy}</p>
                        <p>For more information, visit <a target="_blank" href="/apply">Before You Apply</a></p>
                        <a
                            href={props.location.state.Link}
                            target="_blank"
                            style={{ margin: "auto" }}
                        >
                            <button className="btn btn--primary btn--medium">
                                APPLY NOW <i class="fas fa-edit"></i>
                            </button>
                        </a>
                    </div>
                </div>
                        
                   
            </div>
        </div>
        </div>
    );
}

export default Listing;
