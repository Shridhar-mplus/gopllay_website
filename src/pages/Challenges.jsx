import React from "react";

import Banner from "../assets/img/banners/bg-planet.jpg";
import challengesOne from "../assets/img/challenges/table-tennis.png";
import challengesTwo from "../assets/img/challenges/two-racket-tennis-ball-2.png";
import challengesThree from "../assets/img/challenges/Badminton.png";
import challengesFour from "../assets/img/challenges/cricket-bat-ball.png";
import challengesFive from "../assets/img/challenges/bat-ball.png";
import challengesSix from "../assets/img/challenges/basketball-new.jpeg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Particle from "../components/Particle/Particle";
const Challenges = () => {
  return (
    <div>
      {" "}
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
                    Challenges
                  </li>
                </ol>
              </nav>
              <div className="mt-0 pt-4 text-center">
                <h1 className="text-white text-shadow">Challenges</h1>
                <hr className="divider mt-4 mx-auto bg-warning border-warning" />
              </div>
            </Grid>
            {/* end content  */}
          </Grid>
        </div>
      </div>
      <div className="new-challenges-section ">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <h3 className="section-heading animated-twin-lines">
                TAKE A CHALLENGE
              </h3>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="card hover-scale overflow-hidden">
                <Link
                  href="/challenges-details"
                  className="gallery-link hover-scale-in"
                >
                  <img
                    className="card-img-top"
                    src={challengesOne}
                    title=""
                    alt=""
                  />
                </Link>
                <div className="card-body p-3">
                  <h5 className="mt-1 mb-0">
                    <Link href="/challenges-details" className="text-reset">
                      Alternate Bounce Challenge Table Tennis
                    </Link>
                  </h5>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="card hover-scale overflow-hidden">
                <Link
                  href="/challenges-details"
                  className="gallery-link hover-scale-in"
                >
                  <img
                    className="card-img-top"
                    src={challengesTwo}
                    title=""
                    alt=""
                  />
                </Link>
                <div className="card-body p-3">
                  <h5 className="mt-1 mb-0">
                    <Link href="/challenges-details" className="text-reset">
                      Dribble Challenge Tennis
                    </Link>
                  </h5>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="card hover-scale overflow-hidden">
                <Link
                  href="/challenges-details"
                  className="gallery-link hover-scale-in"
                >
                  <img
                    className="card-img-top"
                    src={challengesThree}
                    title=""
                    alt=""
                  />
                </Link>
                <div className="card-body p-3">
                  <h5 className="mt-1 mb-0">
                    <Link href="/challenges-details" className="text-reset">
                      Alternate Tap Challenge Badminton
                    </Link>
                  </h5>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="card hover-scale overflow-hidden">
                <Link
                  href="/challenges-details"
                  className="gallery-link hover-scale-in"
                >
                  <img
                    className="card-img-top"
                    src={challengesFour}
                    title=""
                    alt=""
                  />
                </Link>
                <div className="card-body p-3">
                  <h5 className="mt-1 mb-0">
                    <Link href="/challenges-details" className="text-reset">
                      Ball Bounce Challenge Cricket
                    </Link>
                  </h5>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div className="card hover-scale overflow-hidden">
                <Link
                  href="/challenges-details"
                  className="gallery-link hover-scale-in"
                >
                  <img
                    className="card-img-top"
                    src={challengesFive}
                    title=""
                    alt=""
                  />
                </Link>
                <div className="card-body p-3">
                  <h5 className="mt-1 mb-0">
                    <Link href="/challenges-details" className="text-reset">
                      Bat Balance Challenge
                    </Link>
                  </h5>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div className="card hover-scale overflow-hidden">
                <Link
                  href="/challenges-details"
                  className="gallery-link hover-scale-in"
                >
                  <img
                    className="card-img-top"
                    src={challengesSix}
                    title=""
                    alt=""
                  />
                </Link>
                <div className="card-body p-3">
                  <h5 className="mt-1 mb-0">
                    <Link href="/challenges-details" className="text-reset">
                      Basketball Single Hand Dribble Challenge
                    </Link>
                  </h5>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="new-challenges-section without-white-bg">
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
      </div>
    </div>
  );
};

export default Challenges;
