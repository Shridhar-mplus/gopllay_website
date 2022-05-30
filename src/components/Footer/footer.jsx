import React from "react";
import  logo  from "../../assets/img/logo.png";
// import {
//     Box,    
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container";

export const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <Container>
                <Grid container spacing={2}>
                <Grid item xs={12} md={3} className="item text">
                        <h3><img src={logo} style={{width:"100px"}}/></h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum.</p>
                    </Grid>
                    <Grid item xs={12} md={3} className="item text">
                        <h3>Important Links</h3>
                        <ul>
                            <li><a href="#">Challenges</a></li>
                            <li><a href="#">Quiz</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Sponsors</a></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} className="item text">
                        <h3>Other Links</h3>
                        <ul>
                            
                           
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms And Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} className="item text">
                        <h3>Social Links</h3>
                        <div className="item social"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-instagram"></i></a></div>
                    </Grid>
                   
                    
                </Grid>
                
            </Container>
            <p className="copyright">Copyright © 2022 GoPllay All Rights Reserved. Designed By - <a href="#">Mplussoft</a></p>
        </footer>
    </div>
    );
};
export default Footer;
