import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@mui/material/Button";

import Banner from "../assets/img/banners/bg-planet.jpg";
import QRCode from "../assets/img/WhatsApp-QR-Code.jpeg";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Particle from "../components/Particle/Particle";
const ChallengesDetails = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#14224a",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(rank, name, score) {
    return { rank, name, score };
  }

  const rows = [
    createData(1, "Shridhar", 85),
    createData(2, "Prashant", 85),
    createData(3, "Kranti", 85),
    createData(4, "Hritik", 85),
  ];

  return (
    <div>
      {" "}
      {/* Banner start*/}
      <div className="challanges-Banner events-Banner">
        <div className="overlay">
          <Container className="h-100">
            <div className="banner-content">
              <div className="banner-details event-banner-details">
                <div className="event-name">
                  <div className="name">Knock Out</div>
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
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Banner end*/}
      <div className="challenges-section-details">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <div className="video-box">
                <iframe
                  loading="lazy"
                  title="video-1"
                  width="100%"
                  height="350px"
                  src="https://www.youtube.com/embed/UWMcKTRCjm4?feature=oembed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              <div className="description mt-20px">
                <h4 className="pos-rel animated-twin-lines ani_left">
                  {" "}
                  Description
                </h4>
                <p className="mt-20px">
                  Maximum number of continuous dribbles to the ground in 30
                  seconds using your forehand without losing contact with the
                  racquet.
                </p>
              </div>
              <div className="description mt-20px">
                <h4 className="pos-rel animated-twin-lines ani_left"> Rules</h4>
                <div className="mt-20px">
                  <p className=" mb-5px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p className="mb-5px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="leaderboard mt-20px">
                <h4 className="pos-rel animated-twin-lines ani_left">
                  Leaderboard
                </h4>
                <TableContainer component={Paper} className="mt-20px">
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Rank</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Score</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.rank}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.score}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="formBox">
                <h4 className="pos-rel animated-twin-lines ani_left">
                  Participates
                </h4>
                <ul className="ul-bullets mt-20px">
                  <li>
                    {" "}
                    <p>
                      Please submit full video of you doing the challenge along
                      with your score.
                    </p>
                  </li>
                  <li>
                    <p>
                      The video will be used to verify the score and to ensure
                      challenge is been done correctly
                    </p>
                  </li>
                </ul>

                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <div className="form-group mb-3">
                        <label className="form-label rd-input-label">
                          Your Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder=""
                          className="form-control form-control-has-validation form-control-last-child"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label rd-input-label">
                          Challeges Name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="challeges-name"
                          type="text"
                          name="challeges-name"
                          placeholder=""
                          className="form-control form-control-has-validation form-control-last-child"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label rd-input-label">
                          Mobile No.<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="mobile-name"
                          type="text"
                          name="mobile-name"
                          placeholder=""
                          className="form-control form-control-has-validation form-control-last-child"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label rd-input-label">
                          Email<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="email"
                          type="text"
                          name="email"
                          placeholder=""
                          className="form-control form-control-has-validation form-control-last-child"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label rd-input-label">
                          Score<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="score"
                          type="text"
                          name="score"
                          placeholder=""
                          className="form-control form-control-has-validation form-control-last-child"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label rd-input-label">
                          Upload Video
                          <br />
                          <span style={{ color: "red" }}>
                            [Note: If greater 50 MB, please share the video on
                            WhatsApp +91 8468930687 (QR Code Below)]
                          </span>
                        </label>
                        <input
                          id="video"
                          type="file"
                          name="video"
                          placeholder=""
                          className="form-control form-control-has-validation form-control-last-child"
                        />
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

                    <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
                      <img src={QRCode} alt="" style={{ width: "200px" }} />
                      <p style={{ color: "#000" }}>+91 8468930687</p>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ChallengesDetails;
