import React from "react";
import "../../App.css";

function ContactUs() {
    return (
        <div>
            <div className="info__paragraph contact">
                <h1>CONTACT US</h1>
                <h4>
                    We strive to prodive our tenants the best customer experience. For further inquiries, please contact us via:
                </h4>
                <br></br>
                <ul>
                    <li>
                        <h5>Email: <a target="_blank" href="mailto:NulandRE@outlook.com">NulandRE@outlook.com</a></h5>
                    </li>
                    <li>
                        <h5>Our Facebook Page: <a target="_blank" href="https://www.facebook.com/NuLandCom">NuLand Inc - Rental Homes</a></h5>
                    </li>
                </ul>
            </div>
        </div>
    ); 
}

export default ContactUs;
