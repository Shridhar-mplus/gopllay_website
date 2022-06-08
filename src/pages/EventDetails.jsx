import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
import CricketIcon from "../assets/img/icons/Cricket.png";
import CrickEvent from "../assets/img/events/cricket.jpg";
import SponsorImg from "../assets/img/sponsors/logo.jpeg";
import OrganizerLogo from "../assets/img/event-logo/TATA-Motors.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Events = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>
      {/* Banner start*/}
      <div className="challanges-Banner events-Banner">
        <div className="overlay">
          <Container className="h-100">
            <div className="banner-content">
              <div className="banner-details ">
                <div className="event-banner-details">
                  <div className="event-logo">
                    <img src={CricketIcon} />
                  </div>

                  <div className="event-name">
                    <div className="name">Crick's Champions</div>
                    <span className="participates">
                      <i className="fa fa-map-marker mr-6px" />
                      Pune, Maharashtra 411015
                    </span>
                    <div>
                      <p className="date">
                        <i className="fa fa-calendar"></i>12-June-2022 |{" "}
                        <i className="fa fa-calendar"></i>18-June-2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-buttons">
                {/* <Link className=""> Team And Score</Link> */}
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
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Banner end*/}

      {/* Event List start*/}
      <div className="event-section event-details-section">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <div className="event-details-box">
                <div className="description mt-20px">
                  <h4 className="pos-rel "> Organizer</h4>
                  <div className="organizer-box">
                    <div className="organizer-logo">
                      <img src={OrganizerLogo} />
                    </div>
                    <div className="organizer-Details">
                      <h3>TATA Consultancy Services</h3>
                      <p>
                        <i className="fa fa-mobile" /> +911234567890
                      </p>
                    </div>
                  </div>
                </div>
                <div className="description mt-20px">
                  <h4 className="pos-rel "> About Event</h4>
                  <div className="about-event-details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className=" mt-20px">
                  <AnimatePresence>
                    <motion.div className="view_more_btn_box ">
                      <motion.div
                        whileHover={{ scale: 0.9 }}
                        className="d-inline-block"
                      >
                        <Link href="/events" className="viewMore testBtn">
                          Enroll Team
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="description mt-20px">
                  <h4 className="pos-rel "> Sponsors</h4>
                  <Slider {...settings}>
                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>
                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>
                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>
                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>
                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>

                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>
                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>
                    <div className="sponsorBox">
                      <img src={SponsorImg} alt="" className="w-100" />
                      <p className="sponsor-name">Sponsor Name</p>
                    </div>
                  </Slider>
                  <div></div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
          </Grid>
        </Container>
      </div>
      {/* Event List End */}
    </div>
  );
};

export default Events;
