import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "../HeroSection.css";


function AboutUs() {
    return (
        <div>
            <div>
                <h1 className="about-us" > ABOUT US</h1 >
            </div>
            <div className="info__paragraph">
                <h1>Nuland Inc.</h1>
                <h4>
                    Being a local family-owned company in Phoenix, AZ, we have lived here for many years and love everything about AZ. As more and more residents are moving here every year, we understand it is very competitive to find a place, so we want to make it more affordable to everyone by providing fair price rentals in the most desired neighborhoods. We are proud to manage all of the properties and provide the best rental experiences to our tenants.
                </h4>
            </div>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--filled"
                    buttonSize="btn--large"
                    destination="contact-us"
                >
                    CONTACT US
                </Button>

                <Button
                    className="btns"
                    buttonStyle="btn--filled"
                    buttonSize="btn--large"
                    destination="listings"
                >
                    SEE LISTINGS <i className="fas fa-images" />
                </Button>
            </div>

        </div>
    );
}

export default AboutUs;
