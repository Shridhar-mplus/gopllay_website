import React from "react";

import Banner from "../assets/img/banners/bg-planet.jpg";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@mui/material/Button";
import Particle from "../components/Particle/Particle";
const Contact = () => {
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
                      <h6 className="m-0">Pune, Maharashtra</h6>
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
                      <h6 className="m-0">info@gopllay.in</h6>
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
                            // for="contact-name"
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
                            // for="contact-email"
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
                            // for="contact-phone"
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
                            // for="contact-message"
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
                              <Button className="viewMore">Submit</Button>
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
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60505.12614796694!2d73.81592632485653!3d18.593397665741016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1654152907107!5m2!1sen!2sin"
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
