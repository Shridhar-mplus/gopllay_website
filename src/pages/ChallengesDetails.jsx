import React from "react";

import Banner from "../assets/img/banners/bg-planet.jpg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Particle from "../components/Particle/Particle";
const ChallengesDetails = () => {
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
                  <li className="breadcrumb-item">
                    <Link href="/challenges">Challenges</Link>
                  </li>
                  <li
                    className="breadcrumb-item active d-none d-md-block"
                    aria-current="page"
                  >
                    Dribble Challenge Tennis
                  </li>
                </ol>
              </nav>
              <div className="mt-0 pt-4 text-center">
                <h1 className="text-white text-shadow">
                  Dribble Challenge Tennis
                </h1>
                <hr className="divider mt-4 mx-auto bg-warning border-warning" />
              </div>
            </Grid>
            {/* end content  */}
          </Grid>
        </div>
      </div>
      <div className="challenges-section-details">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <div className="video-box">
                <iframe
                  loading="lazy"
                  title="video-1"
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/UWMcKTRCjm4?feature=oembed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <h4>Description</h4>
              <p>
                Maximum number of continuous dribbles to the ground in 30
                seconds using your forehand without losing contact with the
                racquet.
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ChallengesDetails;
