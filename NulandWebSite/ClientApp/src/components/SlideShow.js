import React from "react";
import { Carousel } from "react-carousel-minimal";

function SlideShow(props) {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
      <div className="App" key={props.key} id={props.id}>
          <div style={{ textAlign: "center" }} key={props.key} id={props.id}>
            <div
              style={{
                padding: "0 20px",
                marginBottom: "100px",
              }}
            >
              <Carousel
                data={props.data}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "auto auto",
                }}
              />
            </div>
          </div>
    </div>
  );
}

export default SlideShow;
