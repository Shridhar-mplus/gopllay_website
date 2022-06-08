import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BannerOne from "../assets/img/home-banner-1.jpg";
import BannerTwo from "../assets/img/home-banner-2.jpg";
import BannerThree from "../assets/img/home-banner-3.jpg";

import BadmintonIcon from "../assets/img/icons/Badminton.png";
import CricketIcon from "../assets/img/icons/Cricket.png";
import BasketballIcon from "../assets/img/icons/Basketball.png";

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

import ChallengeBox from "../components/Box/challengeBox";
import QuizBox from "../components/Box/quizBox";
import EventBox from "../components/Box/eventBox";

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

      {/* Event start*/}
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
                className="ht-100"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <EventBox
                  eventImg={CrickEvent}
                  eventIcon={CricketIcon}
                  eventName="Crick's Champions"
                  eventLocation="Pune, Maharashtra 411015"
                  eventStartDate="12-June-2022"
                  eventEndDate="16-June-2022"
                  eventBoxType="large"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} className="mb-20px">
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <EventBox
                      eventImg={basketballEvent}
                      eventIcon={BasketballIcon}
                      eventName="All Stars Basketball"
                      eventLocation="Pune, Maharashtra 411015"
                      eventStartDate="12-June-2022"
                      eventEndDate="16-June-2022"
                      eventBoxType="small"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={12} className="mb-20px">
                  {" "}
                  <div data-aos="fade-left" data-aos-duration="2500">
                    <EventBox
                      eventImg={badmintonEvent}
                      eventIcon={BadmintonIcon}
                      eventName="Badminton Tournament"
                      eventLocation="Pune, Maharashtra 411015"
                      eventStartDate="12-June-2022"
                      eventEndDate="16-June-2022"
                      eventBoxType="small"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className=" mt-20px">
                <AnimatePresence>
                  <motion.div className="view_more_btn_box">
                    <motion.div
                      whileHover={{ scale: 0.9 }}
                      className="d-inline-block"
                    >
                      <Link href="/events" className="viewMore ">
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
      {/* Event end*/}

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
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="800"
              >
                <ChallengeBox
                  challengeImg={challengesThree}
                  challengeName="Knock Out"
                  challengeParticipates="350 Participates"
                  isChallengeAccepted="true"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1000"
              >
                <ChallengeBox
                  challengeImg={CrickEvent}
                  challengeName="Bat Ballence Challenge"
                  challengeParticipates="350 Participates"
                  isChallengeAccepted="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1200"
              >
                <ChallengeBox
                  challengeImg={quizOne}
                  challengeName="Wall Hitting"
                  challengeParticipates="350 Participates"
                  isChallengeAccepted="true"
                />
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
                      <Link href="/challenges" className="viewMore ">
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
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="800"
              >
                <QuizBox quizImg={quizOne} quizName="Fifa Quiz" />
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1000"
              >
                <QuizBox quizImg={quizTwo} quizName="Cricket Quiz" />
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-delay="1200"
              >
                <QuizBox quizImg={quizThree} quizName="Basketball Quiz" />
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
