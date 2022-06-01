import React from "react";

import Banner from "../assets/img/banners/bg-planet.jpg";
import AboutImg from "../assets/img/about/about.svg";
import TeamImg from "../assets/img/team/team-2.jpg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@mui/material/Button";
const Contact = () => {
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
                    Contact Us
                  </li>
                </ol>
              </nav>
              <div className="mt-0 pt-4 text-center">
                <h1 className="text-white text-shadow">Contact Us</h1>
                <hr className="divider mt-4 mx-auto bg-warning border-warning" />
              </div>
            </Grid>
            {/* end content  */}
          </Grid>
        </div>
      </div>
      {/* End hero  */}
      <div className="contact-section">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} style={{ marginBottom: "50px" }}>
              <div className="card shadow border position-relative bg-white z-index-1">
                <Grid container spacing={0} className="separated">
                  <Grid item xs={12} md={4}>
                    <div className="py-5 text-center">
                      <div className="icon-lg bg-primary-soft text-primary rounded-circle mb-4">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <h6 className="m-0">New York, NY 92103, USA</h6>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <div className="py-5 text-center">
                      <div className="icon-lg bg-primary-soft text-primary rounded-circle mb-4">
                        <i className="fa fa-phone"></i>
                      </div>
                      <h6 className="m-0">1-800-222-000</h6>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <div className="py-5 text-center">
                      <div className="icon-lg bg-primary-soft text-primary rounded-circle mb-4">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <h6 className="m-0">info@domain.com</h6>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <div className="card shadow wow fadeInUp">
            <div className="card-body p-5 p-lg-7">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <form className="rd-mailform">
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <div className="form-group mb-3">
                          <label
                            className="form-label rd-input-label"
                            for="contact-name"
                          >
                            Your Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder=""
                            className="form-control form-control-has-validation form-control-last-child"
                          />
                          <span className="invalid-feedback"></span>
                        </div>
                        <div className="form-group mb-3">
                          <label
                            className="form-label rd-input-label"
                            for="contact-email"
                          >
                            Email Address
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder=""
                            className="form-control form-control-has-validation form-control-last-child"
                          />
                          <span className="invalid-feedback"></span>
                        </div>
                        <div className="form-group">
                          <label
                            className="form-label rd-input-label"
                            for="contact-phone"
                          >
                            Phone (optional)
                          </label>
                          <input
                            type="tel"
                            name="contact-phone"
                            className="form-control"
                            placeholder=""
                            id="contact-phone"
                          />
                          <span className="invalid-feedback"></span>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={12} className="flex-row">
                        <div className="form-group w-100 d-flex flex-column">
                          <label
                            className="form-label rd-input-label"
                            for="contact-message"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-control min-h-150px h-100 w-100 form-control-has-validation form-control-last-child"
                            id="contact-message"
                            name="message"
                            rows="8"
                            placeholder=""
                          ></textarea>
                          <span className="invalid-feedback"></span>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <AnimatePresence>
                          <div>
                            <motion.div
                              whileHover={{ scale: 0.9 }}
                              className="d-inline-block"
                            >
                              <Link href="/" className="viewMore">
                                Submit
                              </Link>
                            </motion.div>
                          </div>
                        </AnimatePresence>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item xs={12} md={6}>
                  <iframe
                    className="min-vh-50 w-100 m-0 align-top grayscale"
                    width="100%"
                    height="100%"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821917424!2d144.956054!3d-37.817127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1427947693651"
                  ></iframe>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Contact;
