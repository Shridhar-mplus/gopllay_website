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

const Events = () => {
  return (
    <div>
      {/* Banner start*/}
      <div className="challanges-Banner events-Banner">
        <div className="overlay">
          <Container className="h-100">
            <div className="banner-content">
              <div className="banner-details event-banner-details">
                <div className="event-logo">
                  <img src={CricketIcon} />
                </div>

                <div className="event-name">
                  <div className="name">Crick's Champions</div>
                  <span className="participates">
                    <i className="fa fa-map-marker mr-6px" />
                    Pune, Maharashtra 411015
                  </span>

                  <p class="date">
                    <i class="fa fa-calendar"></i>12-June-2022 |{" "}
                    <i class="fa fa-calendar"></i>18-June-2022
                  </p>
                </div>
              </div>
              <div className="banner-buttons">
                <Link className="">
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
      {/* Banner end*/}
      <div className="event-section">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className="hover-scale event-box event-box-sm drop-shadow curled mb-20px">
                    <Link>
                      <div className="img-box hover-scale-in">
                        <img src={CrickEvent} alt="" width="100%" />
                        <div className="overlay event-overlay"></div>
                      </div>
                      <div className="event-details">
                        <div className="event-logo">
                          <img src={CricketIcon} />
                        </div>
                        <div className="event-content">
                          <p className="name">Crick's Champions</p>
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
                <Grid item xs={12} md={6}>
                  <div className="hover-scale event-box event-box-sm  drop-shadow curled ">
                    <Link>
                      <div className="img-box hover-scale-in">
                        <img src={badmintonEvent} alt="" width="100%" />
                        <div className="overlay event-overlay"></div>
                      </div>
                      <div className="event-details">
                        <div className="event-logo">
                          <img src={BadmintonIcon} />
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
                <Grid item xs={12} md={6}>
                  <div className="hover-scale event-box event-box-sm drop-shadow curled mb-20px">
                    <Link>
                      <div className="img-box hover-scale-in">
                        <img src={basketballEvent} alt="" width="100%" />
                        <div className="overlay event-overlay"></div>
                      </div>
                      <div className="event-details">
                        <div className="event-logo">
                          <img src={BasketballIcon} />
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
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="hover-scale event-box event-box-sm  drop-shadow curled ">
                    <Link>
                      <div className="img-box hover-scale-in">
                        <img src={badmintonEvent} alt="" width="100%" />
                        <div className="overlay event-overlay"></div>
                      </div>
                      <div className="event-details">
                        <div className="event-logo">
                          <img src={BadmintonIcon} />
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
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <div>
                    <img src={dummyImage} alt="Ads" className="ads event-ads" />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className="mt-16px">
                    <img src={dummyImage} alt="Ads" className="ads event-ads" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Events;
