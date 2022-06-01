import React, { useEffect } from "react";

import Banner from "../assets/img/banners/bg-planet.jpg";
import quizOne from "../assets/img/quiz/football.jpg";
import quizTwo from "../assets/img/quiz/cricket.jpg";
import quizThree from "../assets/img/quiz/basketball.jpg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import AOS from "aos";
import "aos/dist/aos.css";
const Quiz = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div id="hero" className="section py-5 jarallax">
        {/* background parallax  */}

        {/* background overlay  */}
        <div className="overlay bg-primary opacity-90 z-index-n1"></div>

        {/* rocket moving up animation  */}
        <div className="particle">
          <div className="particle-move-up d-none d-lg-block particle-move-up-1 text-light z-index-n1 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1rem"
              height="1rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up particle-move-up-2 text-light z-index-n1 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1rem"
              height="1rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up d-none d-sm-block particle-move-up-3 text-light z-index-n1 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1.2rem"
              height="1.2rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up d-none d-xl-block particle-move-up-4 text-light z-index-n1 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1rem"
              height="1rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up d-none d-sm-block particle-move-up-5 text-light z-index-n1 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1.2rem"
              height="1.2rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up border-success text-light particle-move-up-6 z-index-n1 opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1rem"
              height="1rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up particle-move-up-7 z-index-n1 text-light opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1.2rem"
              height="1.2rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up particle-move-up-8 z-index-n1 text-light opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1.2rem"
              height="1.2rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
          <div className="particle-move-up particle-move-up-9 z-index-n1 text-light opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-315"
              width="1rem"
              height="1rem"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <path
                className="text-warning"
                fill="currentColor"
                d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLineJoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
          </div>
        </div>
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
                    Quiz
                  </li>
                </ol>
              </nav>
              <div className="mt-0 pt-4 text-center">
                <h1 className="text-white text-shadow">Quiz</h1>
                <hr className="divider mt-4 mx-auto bg-warning border-warning" />
              </div>
            </Grid>
            {/* end content  */}
          </Grid>
        </div>
      </div>
      {/* End hero  */}

      <div className="quiz-section">
        <Container>
          <Grid container spacing={2} className="mb-20px">
            <Grid item xs={6} md={4}>
              <div className="quizBox">
                <img src={quizOne} alt="" />
                <p>Fifa Quiz</p>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div className="quizBox">
                <img src={quizTwo} alt="" />
                <p>Cricket Quiz</p>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div className="quizBox">
                <img src={quizThree} alt="" />
                <p>Basketball Quiz</p>
              </div>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className="quizBox">
                <img src={quizThree} alt="" />
                <p>Olympics Quiz</p>
              </div>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className="quizBox">
                <img src={quizThree} alt="" />
                <p>Racquet Quiz</p>
              </div>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className="quizBox">
                <img src={quizThree} alt="" />
                <p>Tennis Quiz</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Quiz;
