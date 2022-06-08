import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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
const quizDetails = () => {
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

  function createData(rank, name, score, time) {
    return { rank, name, score, time };
  }

  const rows = [
    createData(1, "Shridhar", 85, "1 Min 10 Sec"),
    createData(2, "Prashant", 85, "1 Min 10 Sec"),
    createData(3, "Kranti", 85, "1 Min 10 Sec"),
    createData(4, "Hritik", 85, "1 Min 10 Sec"),
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
                  <div className="name">Fifa Quiz</div>
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
      <div className="challenges-section-details for-challenges-section-details">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <div className="event-details-box">
                <div className="description mt-20px">
                  <h4 className="pos-rel "> Wellcome to GoPllay Quiz</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
                <div className="description mt-20px">
                  <h4 className="pos-rel "> Rules</h4>
                  <ul className="rule-bullet">
                    <li>
                      <p className=" mb-5px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </li>
                    <li>
                      <p className="mb-5px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" mt-20px">
                  <AnimatePresence>
                    <motion.div className="view_more_btn_box ">
                      <motion.div
                        whileHover={{ scale: 0.9 }}
                        className="d-inline-block"
                      >
                        <Link href="/events" className="viewMore testBtn">
                          Take A Test
                        </Link>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="leaderboard mt-20px">
                  <h4 className="pos-rel ">Leaderboard</h4>
                  <TableContainer component={Paper} className="mt-20px">
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Rank</StyledTableCell>
                          <StyledTableCell align="left">Name</StyledTableCell>
                          <StyledTableCell align="left">
                            Score (%)
                          </StyledTableCell>
                          <StyledTableCell align="left">Time</StyledTableCell>
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
                            <StyledTableCell align="left">
                              {row.time}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default quizDetails;
