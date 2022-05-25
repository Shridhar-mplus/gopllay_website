import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import { Nav, Row, Col, Container } from "react-bootstrap";

import BannerOne from "../assets/img/home-banner-1.jpg";
import BannerTwo from "../assets/img/home-banner-2.jpg";
import BannerThree from "../assets/img/home-banner-3.jpg";
import challengesOne from "../assets/img/challenges/img-1.jpg";
import challengesTwo from "../assets/img/challenges/img-2.jpg";
import challengesThree from "../assets/img/challenges/img-3.jpg";
const Home = () => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      {/********** Slider Section Start ***********/}
      <Slider {...settings} className="Modern-Slider">
        <div className="item">
          <div className="img-fill">
            <AnimatePresence>
              <img src={BannerOne} alt="" />
              <motion.div className="info">
                <div>
                  <h3>Why We Love Sports</h3>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </h5>
                  <motion.span whileHover={{ scale: 0.9 }}>
                    <Nav.Link href="/" className="viewMore">
                      View More
                    </Nav.Link>
                  </motion.span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <AnimatePresence>
              <img src={BannerTwo} alt="" />
              <motion.div className="info">
                <div>
                  <h3>Why We Love Sports</h3>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </h5>
                  <motion.span whileHover={{ scale: 0.9 }}>
                    <Nav.Link href="/" className="viewMore">
                      View More
                    </Nav.Link>
                  </motion.span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <AnimatePresence>
              <img src={BannerThree} alt="" />
              <motion.div className="info">
                <div>
                  <h3>Why We Love Sports</h3>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </h5>
                  <motion.span whileHover={{ scale: 0.9 }}>
                    <Nav.Link href="/" className="viewMore">
                      View More
                    </Nav.Link>
                  </motion.span>{" "}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Slider>
      {/********** Slider Section End ***********/}

      {/********** Video Section Start ***********/}
      <div className="videoBoxContainer">
        <motion.div
          className="videoBox"
          animate={{
            x: 0,
            y: -200,
            scale: 1,
            rotate: 0,
          }}
        >
          <div className="iframe-box">
            <iframe
              src="https://www.youtube.com/embed/d-Hos3C8D5g?feature=oembed"
              title="Video"
            ></iframe>
          </div>
        </motion.div>
      </div>
      {/********** Slider Section End ***********/}

      {/********** Challenges Section Start ***********/}
      <div className="challenges-section">
        <Container>
          <Row xs={{ gutter: 0 }} md={{ gutter: 0 }}>
            <Col xs={12} md={12}>
              <h3 className="section-heading">Challenges</h3>
            </Col>
          </Row>
          <Row xs={{ gutter: 0 }} md={{ gutter: 0 }}>
            <Col xs={6} md={4}>
              <div className="challenges-list">
                <div className="challengesBox">
                  <img src={challengesOne} alt="Challenges" />
                  <p>Alternate Tap Challenge Badminton</p>
                </div>
                <div className="challengesBox">
                  <img src={challengesTwo} alt="Challenges" />
                  <p>Ball Bounce Challenge Cricket</p>
                </div>
                <div className="challengesBox">
                  <img src={challengesThree} alt="Challenges" />
                  <p>Basketball Single Hand Dribble Challenge</p>
                </div>
              </div>
            </Col>
            <Col xs={6} md={8}></Col>
          </Row>
        </Container>
      </div>
      {/********** Challenges Section End ***********/}
    </div>
  );
};

export default Home;
