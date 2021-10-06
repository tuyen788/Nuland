import React from "react";
import "../../App.css";
import "./Apply.css";
//import { Carousel } from "react-bootstrap";

function Apply()
{
  return (
      <div>
          <div>
              <h1 className="apply">Before You Apply</h1>
          </div>
          <div className="info__paragraph requirements">
              <h5>We want to make your application process as simple and quick as possible. Before you apply, please have a look at the checklist below to make sure we are exactly what you are looking for.</h5>
              <h1>REQUIREMENTS</h1>
              <ul>
                      <li>
                          <h4>Background check is required and you must have a clear background with no criminal and eviction records.</h4>
                      </li>
                      <li>
                          <h4>Your income must be 2.5 times of the rent.</h4>
                      </li>
                      <li>
                          <h4>You must be able to provide proof of incomes.</h4>
                      </li>
                      <li>
                          <h4>You must be able to provide the reference of your current or previous landlord.</h4>
                      </li>
                      <li>
                          <h4>You must be able to pay rents online via TenantCloud.</h4>
                      </li>
                      
              </ul>
          </div>

          {/*<Carousel>*/}
          {/*    <Carousel.Item>*/}
          {/*        <img*/}
          {/*            className="d-block w-100"*/}
          {/*            src="holder.js/800x400?text=First slide&bg=373940"*/}
          {/*            alt="First slide"*/}
          {/*        />*/}
          {/*        <Carousel.Caption>*/}
          {/*            <h3>First slide label</h3>*/}
          {/*            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
          {/*        </Carousel.Caption>*/}
          {/*    </Carousel.Item>*/}
          {/*    <Carousel.Item>*/}
          {/*        <img*/}
          {/*            className="d-block w-100"*/}
          {/*            src="holder.js/800x400?text=Second slide&bg=282c34"*/}
          {/*            alt="Second slide"*/}
          {/*        />*/}

          {/*        <Carousel.Caption>*/}
          {/*            <h3>Second slide label</h3>*/}
          {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
          {/*        </Carousel.Caption>*/}
          {/*    </Carousel.Item>*/}
          {/*    <Carousel.Item>*/}
          {/*        <img*/}
          {/*            className="d-block w-100"*/}
          {/*            src="holder.js/800x400?text=Third slide&bg=20232a"*/}
          {/*            alt="Third slide"*/}
          {/*        />*/}

          {/*        <Carousel.Caption>*/}
          {/*            <h3>Third slide label</h3>*/}
          {/*            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
          {/*        </Carousel.Caption>*/}
          {/*    </Carousel.Item>*/}
          {/*</Carousel>*/}
       </div>
  );
}
export default Apply;
