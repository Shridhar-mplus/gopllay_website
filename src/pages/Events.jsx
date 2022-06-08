import React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
import BadmintonIcon from "../assets/img/icons/Badminton.png";
import CricketIcon from "../assets/img/icons/Cricket.png";
import BasketballIcon from "../assets/img/icons/Basketball.png";
import dummyImage from "../assets/img/dummy-img.png";

import CrickEvent from "../assets/img/events/cricket.jpg";
import badmintonEvent from "../assets/img/events/badminton.jpeg";
import basketballEvent from "../assets/img/events/basketball.jpg";

import EventBox from "../components/Box/eventBox";

const Events = () => {
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
                  </div>
                </div>
                <div>
                  <p className="date">
                    <i className="fa fa-calendar"></i>12-June-2022 |{" "}
                    <i className="fa fa-calendar"></i>18-June-2022
                  </p>
                </div>
              </div>
              <div className="banner-buttons">
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
      {/* Banner end*/}

      {/* Event List start*/}
      <div className="event-section">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <h3 className="page-heading ">Events</h3>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <EventBox
                    eventImg={CrickEvent}
                    eventIcon={CricketIcon}
                    eventName="Crick's Champions"
                    eventLocation="Pune, Maharashtra 411015"
                    eventStartDate="12-June-2022"
                    eventEndDate="16-June-2022"
                    eventBoxType="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <EventBox
                    eventImg={badmintonEvent}
                    eventIcon={BadmintonIcon}
                    eventName="Badminton Tournament"
                    eventLocation="Pune, Maharashtra 411015"
                    eventStartDate="12-June-2022"
                    eventEndDate="16-June-2022"
                    eventBoxType="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <EventBox
                    eventImg={basketballEvent}
                    eventIcon={BasketballIcon}
                    eventName="All Stars Basketball"
                    eventLocation="Pune, Maharashtra 411015"
                    eventStartDate="12-June-2022"
                    eventEndDate="16-June-2022"
                    eventBoxType="small"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <EventBox
                    eventImg={badmintonEvent}
                    eventIcon={BadmintonIcon}
                    eventName="Badminton Tournament"
                    eventLocation="Pune, Maharashtra 411015"
                    eventStartDate="12-June-2022"
                    eventEndDate="16-June-2022"
                    eventBoxType="small"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <div>
                    <img src={dummyImage} alt="Ads" className="ads event-ads" />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div>
                    <img src={dummyImage} alt="Ads" className="ads event-ads" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* Event List End */}
    </div>
  );
};

export default Events;
