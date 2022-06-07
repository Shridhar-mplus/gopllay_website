import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CrickEvent from "../assets/img/events/cricket.jpg";
import challengesThree from "../assets/img/challenges/Badminton.png";
import dummyImage from "../assets/img/dummy-img.png";

import quizOne from "../assets/img/quiz/football.jpg";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const Challenges = () => {
  return (
    <div>
      <div className="challanges-Banner">
        <div className="overlay">
          <Container className="h-100">
            <div className="banner-content">
              <div className="banner-details">
                <div className="name">Knock Out</div>
                <span className="participates">
                  <i className="fa fa-users mr-6px" />
                  350 Participates
                </span>
              </div>
              <div className="banner-buttons">
                <Link className="">
                  {" "}
                  <i class="fa fa-dashboard"></i> Dashboard
                </Link>
                <Link className="">
                  {" "}
                  <i className="fa fa-heart-o" />
                  250
                </Link>
                <Link className="">
                  {" "}
                  <i className="fa fa-share" />
                  Share
                </Link>
                <Link className="">More Details</Link>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="new-challenges-section ">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className="new-challenges-box ">
                    <Link href="/challenges-details">
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
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="new-challenges-box ">
                    <Link href="/challenges-details">
                      <div className="challeges-img-box">
                        <img src={CrickEvent} alt="" />
                        {/* <div className="trophy-icon">
                    <i className="fa fa-trophy" />
                  </div> */}
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
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="new-challenges-box ">
                    <Link href="/challenges-details">
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
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="new-challenges-box ">
                    <Link href="/challenges-details">
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
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} className="mt-16px">
                  <img src={dummyImage} alt="Ads" className="ads" />
                </Grid>
                <Grid item xs={12} md={12} className="mt-16px">
                  <img src={dummyImage} alt="Ads" className="ads" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* <div className="new-challenges-section without-white-bg">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <h3 className="section-heading animated-twin-lines">
                GLIMPSES OF PARTICIPATION
              </h3>
            </Grid>
            <Grid item xs={6} md={4}>
              <div className="video-box">
                <iframe
                  loading="lazy"
                  title="video-1"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/UWMcKTRCjm4?feature=oembed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div className="video-box">
                <iframe
                  loading="lazy"
                  title="video-2"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/6kM31Ob3h9s?feature=oembed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div className="video-box">
                <iframe
                  loading="lazy"
                  title="video-3"
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/qdpG6z_4Fv8?feature=oembed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div> */}
    </div>
  );
};

export default Challenges;
