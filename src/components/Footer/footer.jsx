import React from "react";
import  logo  from "../../assets/img/logo.png";
import {
    Box,
    
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import Container from "@mui/material/Container";

export const Footer = () => {
    return (
        <div class="footer-dark">
        <footer>
            <Container>
                <div class="row">
                <div class="col-md-3 item text">
                        <h3><img src={logo} style={{width:"100px"}}/></h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum.</p>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Important Links</h3>
                        <ul>
                            <li><a href="#">Challenges</a></li>
                            <li><a href="#">Quiz</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Sponsors</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Other Links</h3>
                        <ul>
                            
                           
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Terms And Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Social Links</h3>
                        <div class="item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                    </div>
                   
                    
                </div>
                
            </Container>
            <p class="copyright">Copyright © 2022 GoPllay All Rights Reserved. Designed By - <a href="#">Mplussoft</a></p>
        </footer>
    </div>
    );
};
export default Footer;
