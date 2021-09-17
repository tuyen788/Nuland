import React from "react";
import CardItem from "./CardItem";
import img9 from "../images/img-9.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img8 from "../images/img-8.jpg";
import "./Poster.css";
import { Button } from "./Button";

function Poster() {
  return (
    <div>
      <div className="posters__container">
        <div className="posters__wrapper">
          <ul className="posters__items">
            <div className="poster__item">
              <div className="poster__picture">
                <CardItem
                  src={img9}
                  text="Single family house in Mesa, AZ"
                  label="Single family"
                />
              </div>
              <div className="poster__info">
                <h3>Single family house in Mesa, AZ</h3>
                <p>Available date: September 1st, 2021</p>
                <p>Price: $2,000/month</p>
                <p>
                  Amenities: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Alias quo, saepe modi, ea veniam illo dolorum
                  repudiandae, incidunt ipsa accusamus consequatur assumenda
                  autem non quibusdam dignissimos laborum a vero. Beatae.
                  Amenities: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Alias quo, saepe modi, ea veniam illo dolorum
                  repudiandae, incidunt ipsa accusamus consequatur assumenda
                  autem non quibusdam dignissimos laborum a vero. Beatae.
                  Amenities: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Alias quo, saepe modi, ea veniam illo dolorum
                  repudiandae, incidunt ipsa accusamus consequatur assumenda
                  autem non quibusdam dignissimos laborum a vero. Beatae.
                </p>
                <div className="hero-btns">
                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    LEARN MORE <i class="fas fa-info-circle"></i>
                  </Button>

                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    destination="apply"
                  >
                    APPLY NOW <i class="fas fa-edit"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="poster__item">
              <div className="poster__picture">
                <CardItem
                  src={img2}
                  text="Duplex studios in Tempe, AZ"
                  label="Duplex"
                />
              </div>
              <div className="poster__info">
                <h3>Duplex studios in Tempe, AZ</h3>
                <p>Available date: September 1st, 2021</p>
                <p>Price: $2,000/month</p>
                <p>
                  Amenities: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Alias quo, saepe modi, ea veniam illo dolorum
                  repudiandae, incidunt ipsa accusamus consequatur assumenda
                  autem non quibusdam dignissimos laborum a vero. Beatae.
                </p>
                <div className="hero-btns">
                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    LEARN MORE <i class="fas fa-info-circle"></i>
                  </Button>

                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    APPLY NOW <i class="fas fa-edit"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="poster__item">
              <div className="poster__picture">
                <CardItem
                  src={img3}
                  text="Townhouse near Downtown Phoenix"
                  label="Townhouse"
                />
              </div>
              <div className="poster__info">
                <h3>Townhouse near Downtown Phoenix</h3>
                <p>Available date: September 1st, 2021</p>
                <p>Price: $2,000/month</p>
                <p>
                  Amenities: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Alias quo, saepe modi, ea veniam illo dolorum
                  repudiandae, incidunt ipsa accusamus consequatur assumenda
                  autem non quibusdam dignissimos laborum a vero. Beatae.
                </p>
                <div className="hero-btns">
                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    LEARN MORE <i class="fas fa-info-circle"></i>
                  </Button>

                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    APPLY NOW <i class="fas fa-edit"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="poster__item">
              <div className="poster__picture">
                <CardItem
                  src={img4}
                  text="Single family house in Chandler, AZ"
                  label="Single family"
                />
              </div>
              <div className="poster__info">
                <h3>Single family house in Chandler, AZ</h3>
                <p>Available date: September 1st, 2021</p>
                <p>Price: $2,000/month</p>
                <p>
                  Amenities: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Alias quo, saepe modi, ea veniam illo dolorum
                  repudiandae, incidunt ipsa accusamus consequatur assumenda
                  autem non quibusdam dignissimos laborum a vero. Beatae.
                </p>
                <div className="hero-btns">
                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    LEARN MORE <i class="fas fa-info-circle"></i>
                  </Button>

                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    APPLY NOW <i class="fas fa-edit"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="poster__item">
              <div className="poster__picture">
                <CardItem
                  src={img8}
                  text="Townhouse near Downtown Phoenix"
                  label="Townhouse"
                />
              </div>
              <div className="poster__info">
                <h3>Townhouse near Downtown Phoenix</h3>
                <p>Available date: September 1st, 2021</p>
                <p>Price: $2,000/month</p>
                <p>
                  Amenities: Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Alias quo, saepe modi, ea veniam illo dolorum
                  repudiandae, incidunt ipsa accusamus consequatur assumenda
                  autem non quibusdam dignissimos laborum a vero. Beatae.
                </p>
                <div className="hero-btns">
                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    LEARN MORE <i class="fas fa-info-circle"></i>
                  </Button>

                  <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                  >
                    APPLY NOW <i class="fas fa-edit"></i>
                  </Button>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Poster;
