import React from "react";

import Banner from "../assets/img/banners/bg-planet.jpg";
import AboutImg from "../assets/img/about/about.svg";
import TeamImg from "../assets/img/team/team-2.jpg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Particle from "../components/Particle/Particle";

const About = () => {
  return (
    <div>
      <div id="hero" className="section py-5 jarallax">
        {/* background parallax  */}

        {/* background overlay  */}
        <div className="overlay bg-primary opacity-90 z-index-n1"></div>

        {/* rocket moving up animation  */}
        <Particle />
        <div id="jarallax-container-0">
          <img className="jarallax-img" src={Banner} alt="title" />
        </div>
        <div className="container">
          <Grid container spacing={0}>
            {/* content  */}
            <Grid item xs={12} md={12}>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent small mb-0">
                  <li className="breadcrumb-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item active d-none d-md-block"
                    aria-current="page"
                  >
                    About Us
                  </li>
                </ol>
              </nav>
              <div className="mt-0 pt-4 text-center">
                <h1 className="text-white text-shadow">About Us</h1>
                <hr className="divider mt-4 mx-auto bg-warning border-warning" />
              </div>
            </Grid>
            {/* end content  */}
          </Grid>
        </div>
      </div>
      {/* End hero  */}

      <div className="about-section">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <img src={AboutImg} style={{ width: "100%" }} alt="" />
            </Grid>
            <Grid item xs={12} md={7}>
              <div className="about_info">
                <h3 className="section-heading text-left animated-twin-lines ani_left">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className="our-team-section without-white-bg">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <h3 className="section-heading animated-twin-lines">Our Team</h3>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="team-box hover-top p-3 bg-white shadow shadow-lg-hover wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.1s"
              >
                <div className="">
                  <img
                    src={TeamImg}
                    title=""
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="pt-3">
                  <h6 className="fw-700 dark-color mb-1">Dhruv Sharma</h6>
                  <div className="pt-2">
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-linkedin"
                      href="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="team-details pt-2">
                    <p className="text-justify">
                      Dhruv is a certified Scuba Diver and Paraglider. He is a
                      passionate sportsperson busy spending his life pllaying
                      (even when he is hopping on one feet) Tennis, Cricket,
                      Badminton and Hiking. Somewhere along the way he managed
                      to educate himself, and is an alumnus of Harvard Business
                      School (Executive Education) and Indian Institute of
                      Management, Lucknow
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div
                className="team-box hover-top p-3 bg-white shadow shadow-lg-hover wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.1s"
              >
                <div className="">
                  <img
                    src={TeamImg}
                    title=""
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="pt-3">
                  <h6 className="fw-700 dark-color mb-1">Nishant Oberoi</h6>
                  <div className="pt-2">
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-linkedin"
                      href="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="team-details pt-2">
                    <p className="text-justify">
                      Nishant is a Karate Black Belt, active Tennis Pllayer,
                      running enthusiast and a sports aficionado. An Animal
                      lover, he’s often seen trying to teach sport tricks to his
                      pets, and carrying around bags of dog and cat food to
                      treat all the strays in the neighborhood.
                    </p>
                    <p className="text-justify">
                      He has done his MBA in Finance from University of Wales
                      and Program in Advanced Finance from INSEAD.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="team-box hover-top p-3 bg-white shadow shadow-lg-hover wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.1s"
              >
                <div className="">
                  <img
                    src={TeamImg}
                    title=""
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="pt-3">
                  <h6 className="fw-700 dark-color mb-1">Ashutosh Sharma</h6>
                  <div className="pt-2">
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-linkedin"
                      href="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="team-details pt-2">
                    <p className="text-justify">
                      Ashutosh is an avid Marathoner transitioning to be a
                      triathlete, and an active Basketball Pllayer. He can often
                      be seen racing with Horses at the crack of dawn. A techie
                      to the core, he holds an MBA in Operations from Symbiosis
                      and is a Certified Six Sigma Black Belt.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className="our-champion-section ">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <h3 className="section-heading animated-twin-lines">
                OUR CHAMPIONS AND BUDDIES
              </h3>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="team-box hover-top p-3 bg-white shadow shadow-lg-hover wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.1s"
              >
                <div className="">
                  <img
                    src={TeamImg}
                    title=""
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="pt-3">
                  <h6 className="fw-700 dark-color mb-1">Shiva Keshavan</h6>
                  <div className="pt-2">
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-linkedin"
                      href="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="team-details pt-2">
                    <p className="text-justify">
                      Shiva is a 6 Olympian and four-time Asian Champion in the
                      Winter Sport of Luge. He is the reigning Asian Record
                      Holder.
                    </p>
                    <p className="text-justify">
                      Shiva is currently the President, Olympians Association of
                      India, Member of IOA Athletes Commission and Ethics
                      Committee and Member of Sports Council, Government of
                      Himachal Pradesh.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div
                className="team-box hover-top p-3 bg-white shadow shadow-lg-hover wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.1s"
              >
                <div className="">
                  <img
                    src={TeamImg}
                    title=""
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="pt-3">
                  <h6 className="fw-700 dark-color mb-1">Sid Deshmukh</h6>
                  <div className="pt-2">
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-linkedin"
                      href="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="team-details pt-2">
                    <p className="text-justify">
                      Sid is the Managing Partner at Arimaya Ventures, and
                      founding member, MBA in Sports Management, Symbiosis
                      School of Sports Sciences. Deeply entrenched into the
                      Indian Sports Ecosystem, Sid runs his own sports talk show
                      You Tube channel Sportsysays
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="team-box hover-top p-3 bg-white shadow shadow-lg-hover wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.1s"
              >
                <div className="">
                  <img
                    src={TeamImg}
                    title=""
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="pt-3">
                  <h6 className="fw-700 dark-color mb-1">Vaibhav Joshi</h6>
                  <div className="pt-2">
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-linkedin"
                      href="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>{" "}
                    <Link
                      className="icon-sm bg-secondary rounded-circle text-white me-1 bg-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </div>
                  <div className="team-details pt-2">
                    <p className="text-justify">
                      Vaibhav is the Manager of the U-17 Women Indian National
                      Team, helping prepare them for the FIFA U-17 World Cup to
                      be held in India in 2022. Apart from being a football
                      pllayer himself, he is an avid gamer
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About;
