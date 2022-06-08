import React from "react";

import CrickEvent from "../assets/img/events/cricket.jpg";
import challengesThree from "../assets/img/challenges/Badminton.png";
import dummyImage from "../assets/img/dummy-img.png";
import quizOne from "../assets/img/quiz/football.jpg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ChallengeBox from "../components/Box/challengeBox";

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
                <Link className=""> Dashboard</Link>
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
                  <ChallengeBox
                    challengeImg={challengesThree}
                    challengeName="Knock Out"
                    challengeParticipates="350 Participates"
                    isChallengeAccepted="true"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ChallengeBox
                    challengeImg={CrickEvent}
                    challengeName="Bat Ballence Challenge"
                    challengeParticipates="350 Participates"
                    isChallengeAccepted="false"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ChallengeBox
                    challengeImg={quizOne}
                    challengeName="Wall Hitting"
                    challengeParticipates="350 Participates"
                    isChallengeAccepted="true"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ChallengeBox
                    challengeImg={quizOne}
                    challengeName="Wall Hitting"
                    challengeParticipates="350 Participates"
                    isChallengeAccepted="true"
                  />
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
    </div>
  );
};

export default Challenges;
