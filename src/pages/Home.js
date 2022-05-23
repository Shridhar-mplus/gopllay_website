import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings} className="Modern-Slider">
        <div className="item">
          <div className="img-fill">
            <img src="https://i.imgur.com/JNKiMHU.jpg" alt="" />
            <div className="info">
              <div>
                <h3>Full Width Slider With Layers</h3>
                <h5>
                  You can easily add image, html formatted texts and video
                  layers over each slide and each layer accepts unique
                  animation.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img src="https://i.imgur.com/ESMjChq.jpg" alt="" />
            <div className="info">
              <div>
                <h3>Fully responsive Scales with its container</h3>
                <h5>
                  Donec id ornare dui. Aenean tristique condimentum elit, quis
                  blandit nisl varius sit amet. Sed eleifend felis quis massa
                  viverra
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img src="https://i.imgur.com/TDxSvHH.jpg" alt="" />
            <div className="info">
              <div>
                <h3>Awesome Transtions With CSS3</h3>
                <h5>
                  Donec id ornare dui. Aenean tristique condimentum elit, quis
                  blandit nisl varius sit amet. Sed eleifend felis quis massa
                  viverra
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
