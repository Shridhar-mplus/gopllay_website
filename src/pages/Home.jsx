import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BannerOne from "../assets/img/home-banner-1.jpg";
import BannerTwo from "../assets/img/home-banner-2.jpg";
import BannerThree from "../assets/img/home-banner-3.jpg";
import dummyImage from "../assets/img/dummy-image.jpg";
import CrickEvent from "../assets/img/events/cricket.jpg";
import badmintonEvent from "../assets/img/events/badminton.jpeg";
import basketballEvent from "../assets/img/events/basketball.jpg";

import challengesThree from "../assets/img/challenges/basketball-knock-out.jpg";
import quizOne from "../assets/img/quiz/football.jpg";
import quizTwo from "../assets/img/quiz/cricket.jpg";
import quizThree from "../assets/img/quiz/basketball.jpg";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import AOS from "aos";
import "aos/dist/aos.css";

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
                    <h3 data-aos="fade-right" data-aos-duration="1500">
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
                      data-aos-offset="-100"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <motion.div whileHover={{ scale: 0.9 }}>
                        <Link href="/" className="viewMore">
                          VIEW MORE
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 0.9 }}>
                        <Button onClick={handleOpen} className="play-video-btn">
                          <PlayCircleOutlineIcon /> Watch Video
                        </Button>
                      </motion.div>
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
                    <h3 data-aos="fade-right" data-aos-duration="1500">
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
                      data-aos-offset="-100"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <motion.div whileHover={{ scale: 0.9 }}>
                        <Link href="/" className="viewMore">
                          VIEW MORE
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 0.9 }}>
                        <Button onClick={handleOpen} className="play-video-btn">
                          <PlayCircleOutlineIcon /> Watch Video
                        </Button>
                      </motion.div>
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
                    <h3 data-aos="fade-right" data-aos-duration="1500">
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
                      data-aos-offset="-100"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <motion.div whileHover={{ scale: 0.9 }}>
                        <Link href="/" className="viewMore">
                          VIEW MORE
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 0.9 }}>
                        <Button onClick={handleOpen} className="play-video-btn">
                          <PlayCircleOutlineIcon /> Watch Video
                        </Button>
                      </motion.div>
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
        <Box sx={{ ...style, width: 650, height: 450, padding: 0 }}>
          <CloseIcon className="modalCloseBtn" onClick={handleClose} />
          <iframe
            src="https://www.youtube.com/embed/d-Hos3C8D5g?feature=oembed"
            className="modalVideo"
            title="video"
          ></iframe>
        </Box>
      </Modal>
      {/* Video Modal end*/}

      <div className="event-section">
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <h3
                className="section-heading animated-twin-lines"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Events
              </h3>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <div
                className="hover-scale main-event event-box drop-shadow curled"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link>
                  <div className="img-box hover-scale-in">
                    <img src={CrickEvent} alt="" width="100%" />
                    <div className="overlay event-overlay"></div>
                  </div>
                  <div className="event-details">
                    <div className="event-logo">
                      <img src={dummyImage} />
                    </div>
                    <div className="event-content">
                      <p className="name">Crick's Champions</p>
                      <p className="venu">
                        <i className="fa fa-map-marker" />
                        V9 - Landmark 203, Second Floor, above HDFC Bank,
                        Vishrantwadi, Pune, Maharashtra 411015
                      </p>
                      <p className="date">
                        <i className="fa fa-calendar" />
                        12-June-2022 | <i className="fa fa-calendar" />
                        18-June-2022
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="hover-scale event-box event-box-sm drop-shadow curled mb-20px"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Link>
                  <div className="img-box hover-scale-in">
                    <img src={basketballEvent} alt="" width="100%" />
                    <div className="overlay event-overlay"></div>
                  </div>
                  <div className="event-details">
                    <div className="event-logo">
                      <img src={dummyImage} />
                    </div>
                    <div className="event-content">
                      <p className="name">All Stars Basketball</p>
                      <p className="venu">
                        <i className="fa fa-map-marker" />
                        Pune, Maharashtra 411015
                      </p>
                      <p className="date">
                        <i className="fa fa-calendar" />
                        12-June-2022 | <i className="fa fa-calendar" />
                        18-June-2022
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="hover-scale event-box drop-shadow curled "
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <Link>
                  <div className="img-box hover-scale-in">
                    <img src={badmintonEvent} alt="" width="100%" />
                    <div className="overlay event-overlay"></div>
                  </div>
                  <div className="event-details">
                    <div className="event-logo">
                      <img src={dummyImage} />
                    </div>
                    <div className="event-content">
                      <p className="name">Badminton Tournament</p>
                      <p className="venu">
                        <i className="fa fa-map-marker" />
                        Pune, Maharashtra 411015
                      </p>
                      <p className="date">
                        <i className="fa fa-calendar" />
                        12-June-2022 | <i className="fa fa-calendar" />
                        18-June-2022
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/********** Challenges Section Start ***********/}
      <div className="challenges-section without-white-bg">
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <h3
                className="section-heading animated-twin-lines"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Challenges
              </h3>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div
                className="new-challenges-box "
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="800"
              >
                <div className="challeges-img-box">
                  <img src={challengesThree} alt="" />
                  <div className="trophy-icon">
                    <i className="fa fa-trophy" />
                  </div>
                </div>
                <div className="challeges-details">
                  <p>Knock Out</p>
                  <p className="no-of-participates">350 Participates</p>
                  <AnimatePresence>
                    <motion.div whileHover={{ scale: 0.9 }}>
                      <Link className="view-dashboard-btn">
                        <i className="fa fa-dashboard" />
                        View Dashboard
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="new-challenges-box "
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1000"
              >
                <div className="challeges-img-box">
                  <img src={CrickEvent} alt="" />
                  <div className="trophy-icon">
                    <i className="fa fa-trophy" />
                  </div>
                </div>
                <div className="challeges-details">
                  <p>Bat Ballence Challenge</p>
                  <p className="no-of-participates">350 Participates</p>
                  <AnimatePresence>
                    <motion.div whileHover={{ scale: 0.9 }}>
                      <Link className="view-dashboard-btn take-a-challenge-btn">
                        Take A Challenge
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="new-challenges-box "
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1200"
              >
                <div className="challeges-img-box">
                  <img src={quizOne} alt="" />
                  <div className="trophy-icon">
                    <i className="fa fa-trophy" />
                  </div>
                </div>
                <div className="challeges-details">
                  <p>Wall Hitting</p>
                  <p className="no-of-participates">350 Participates</p>
                  <AnimatePresence>
                    <motion.div whileHover={{ scale: 0.9 }}>
                      <Link className="view-dashboard-btn">
                        <i className="fa fa-dashboard" />
                        View Dashboard
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className=" mt-20px">
                <AnimatePresence>
                  <motion.div className="view_more_btn_box">
                    <motion.div
                      whileHover={{ scale: 0.9 }}
                      className="d-inline-block"
                    >
                      <Link href="/" className="viewMore ">
                        VIEW ALL
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <div className="challenges-section">
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <h3
                className="section-heading animated-twin-lines"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Challenges
              </h3>
            </Grid>
          </Grid>
          <Grid container spacing={0} className="cus-box-shadow mb-20px">
            <Grid item xs={6} md={3} className="no-right no-left">
              <div
                className="challenges-list "
                data-aos="fade-right"
                data-aos-duration="1500"
              >
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
            </Grid>
            <Grid item xs={6} md={9} className="no-left no-right">
              <div
                className="challenges-box"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Grid container spacing={0}>
                  <Grid item xs={12} md={12}>
                    <p className="main-title">
                      Alternate Tap Challenge Badminton
                    </p>
                    <div className="challenges-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <div></div>
              </div>
            </Grid>
          </Grid>
          <AnimatePresence>
            <div className="view_more_btn_box">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="d-inline-block"
              >
                <Link href="/" className="viewMore">
                  VIEW ALL
                </Link>
              </motion.div>
            </div>
          </AnimatePresence>
        </Container>
      </div> */}
      {/********** Challenges Section End ***********/}

      {/**********Quiz Section Start***********/}
      <div className="quiz-section">
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              <h3
                className="section-heading animated-twin-lines"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Quiz
              </h3>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="mb-20px">
            <Grid item xs={6} md={4}>
              <div
                className="quizBox"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="800"
              >
                <img src={quizOne} alt="" />
                <p>Fifa Quiz</p>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div
                className="quizBox"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1000"
              >
                <img src={quizTwo} alt="" />
                <p>Cricket Quiz</p>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div
                className="quizBox"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1200"
              >
                <img src={quizThree} alt="" />
                <p>Basketball Quiz</p>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className="mt-20px">
                <AnimatePresence>
                  <motion.div className="view_more_btn_box ">
                    <motion.div
                      whileHover={{ scale: 0.9 }}
                      className="d-inline-block"
                    >
                      <Link href="/" className="viewMore ">
                        VIEW ALL
                      </Link>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/**********Quiz Section Start***********/}
    </div>
  );
};

export default Home;
