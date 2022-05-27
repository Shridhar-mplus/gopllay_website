import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
// import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import { Nav, Row, Col, Container } from "react-bootstrap";

import BannerOne from "../assets/img/home-banner-1.jpg";
import BannerTwo from "../assets/img/home-banner-2.jpg";
import BannerThree from "../assets/img/home-banner-3.jpg";
import challengesOne from "../assets/img/challenges/img-1.jpg";
import challengesTwo from "../assets/img/challenges/img-2.jpg";
import challengesThree from "../assets/img/challenges/img-3.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/********** Slider Section Start ***********/}
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        className="Modern-Slider"
      >
        <div>
          <div className="item">
            <div className="img-fill">
              <img src={BannerOne} alt="" />
              <AnimatePresence>
                <motion.div className="info">
                  <div>
                    <h3 data-aos="zoom-in" data-aos-duration="1500">
                      Why We Love Sports
                    </h3>
                    <h5 data-aos="fade-up" data-aos-duration="1500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </h5>
                    <div
                      className="slider-btn"
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="1500"
                    >
                      <motion.span whileHover={{ scale: 0.9 }}>
                        <Nav.Link href="/" className="viewMore">
                          View More
                        </Nav.Link>
                      </motion.span>
                      <motion.span whileHover={{ scale: 0.9 }}>
                        <Button onClick={handleOpen} className="play-video-btn">
                          <PlayCircleOutlineIcon /> Play Video
                        </Button>
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div>
          <div className="item">
            <div className="img-fill">
              <img src={BannerTwo} alt="" />
              <AnimatePresence>
                <motion.div className="info">
                  <div>
                    <h3 data-aos="zoom-in" data-aos-duration="1500">
                      Why We Love Sports
                    </h3>
                    <h5 data-aos="fade-up" data-aos-duration="1500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </h5>
                    <div
                      className="slider-btn"
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="1500"
                    >
                      <motion.span whileHover={{ scale: 0.9 }}>
                        <Nav.Link href="/" className="viewMore">
                          View More
                        </Nav.Link>
                      </motion.span>
                      <motion.span whileHover={{ scale: 0.9 }}>
                        <Button onClick={handleOpen} className="play-video-btn">
                          <PlayCircleOutlineIcon /> Play Video
                        </Button>
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div>
          <div className="item">
            <div className="img-fill">
              <img src={BannerThree} alt="" />
              <AnimatePresence>
                <motion.div className="info">
                  <div>
                    <h3 data-aos="zoom-in" data-aos-duration="1500">
                      Why We Love Sports
                    </h3>
                    <h5 data-aos="fade-up" data-aos-duration="1500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </h5>
                    <div
                      className="slider-btn"
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="1500"
                    >
                      <motion.span whileHover={{ scale: 0.9 }}>
                        <Nav.Link href="/" className="viewMore">
                          View More
                        </Nav.Link>
                      </motion.span>
                      <motion.span whileHover={{ scale: 0.9 }}>
                        <Button onClick={handleOpen} className="play-video-btn">
                          <PlayCircleOutlineIcon /> Play Video
                        </Button>
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </AutoplaySlider>
      {/********** Slider Section End ***********/}

      {/* Video Modal start*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 400, padding: 0 }}>
          <CloseIcon className="modalCloseBtn" onClick={handleClose} />
          <iframe
            src="https://www.youtube.com/embed/d-Hos3C8D5g?feature=oembed"
            className="modalVideo"
            title=""
          ></iframe>
        </Box>
      </Modal>
      {/* Video Modal end*/}

      {/********** Challenges Section Start ***********/}
      <div className="challenges-section">
        <Container>
          <Row xs={{ gutter: 0 }} md={{ gutter: 0 }}>
            <Col xs={12} md={12}>
              <h3 className="section-heading">Challenges</h3>
            </Col>
          </Row>
          <Row xs={{ gutter: 0 }} md={{ gutter: 0 }}>
            <Col xs={6} md={3} className="no-right">
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
            <Col xs={6} md={9} className="no-left">
              <div className="challenges-box">
                <Row xs={{ gutter: 0 }} md={{ gutter: 0 }}>
                  <Col xs={12} md={12}>
                    <p className="main-title">
                      Alternate Tap Challenge Badminton
                    </p>
                    <div className="challenges-description">
                      <p>
                        Maximum number of shuttle taps on the badminton racquet
                        using alternate strokes (forehand, backhand and so
                        forth) in 30 sec. without dropping the shuttle
                      </p>
                    </div>
                    <div className="text-center">
                      <iframe
                        src="https://www.youtube.com/embed/d-Hos3C8D5g?feature=oembed"
                        title=""
                        width="500px"
                        height="250px"
                      ></iframe>
                    </div>
                  </Col>
                  <Col xs={12} md={5}></Col>
                </Row>
                <div></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/********** Challenges Section End ***********/}

      {/**********Quiz Section Start***********/}
      <div className="quiz-section">
        <Container>
          <Row xs={{ gutter: 0 }} md={{ gutter: 0 }}>
            <Col xs={12} md={12}>
              <h3 className="section-heading">Quiz</h3>
            </Col>
          </Row>
        </Container>
      </div>
      {/**********Quiz Section Start***********/}
    </div>
  );
};

export default Home;
