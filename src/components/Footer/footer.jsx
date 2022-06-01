import React from "react";
import logo from "../../assets/img/logo.png";
// import {
//     Box,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterStyles";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} className="item text">
              <h3>
                <img src={logo} style={{ width: "100px" }} alt="" />
              </h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum.
              </p>
            </Grid>
            <Grid item xs={12} md={3} className="item text">
              <h3>Important Links</h3>
              <ul>
                <li>
                  <Link href="/challenges">Challenges</Link>
                </li>
                <li>
                  <Link href="/quiz">Quiz</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="#">Our Sponsors</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={3} className="item text">
              <h3>Other Links</h3>
              <ul>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Terms And Condition</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={3} className="item text">
              <h3>Social Links</h3>
              <div className="item social">
                <Link href="#">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fa fa-linkedin"></i>
                </Link>
                <Link href="#">
                  <i className="fa fa-instagram"></i>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
        <p className="copyright">
          Copyright © 2022 GoPllay All Rights Reserved. Designed By -{" "}
          <Link href="#">Mplussoft</Link>
        </p>
      </footer>
    </div>
  );
};
export default Footer;
