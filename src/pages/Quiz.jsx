import React, { useEffect } from "react";

import Banner from "../assets/img/banners/bg-planet.jpg";
import quizOne from "../assets/img/quiz/football.jpg";
import quizTwo from "../assets/img/quiz/cricket.jpg";
import quizThree from "../assets/img/quiz/basketball.jpg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Particle from "../components/Particle/Particle";

import QuizBox from "../components/Quiz/quizBox";

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
              <QuizBox quizImg={quizOne} quizName="Fifa Quiz" />
            </Grid>
            <Grid item xs={6} md={4}>
              <QuizBox quizImg={quizTwo} quizName="Cricket Quiz" />
            </Grid>
            <Grid item xs={6} md={4}>
              <QuizBox quizImg={quizThree} quizName="Basketball Quiz" />
            </Grid>

            <Grid item xs={6} md={4}>
              <QuizBox quizImg={quizThree} quizName="Olympics Quiz" />
            </Grid>

            <Grid item xs={6} md={4}>
              <QuizBox quizImg={quizThree} quizName="Racquet Quiz" />
            </Grid>

            <Grid item xs={6} md={4}>
              <QuizBox quizImg={quizThree} quizName="Tennis Quiz" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Quiz;
