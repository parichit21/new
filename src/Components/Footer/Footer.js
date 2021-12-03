import { Grid } from '@mui/material';
import React from 'react';
import About from '../Pages/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="Footer">

            <Grid container >

                {/* 1st block */}
                <Grid item lg={2}  xs={12}>
               
                    <div className="name__comp">
                       
                    </div>
                </Grid>


                {/* 2nd block */}

               
                <Grid item lg={5} sm={6} xs={12}>
           
                    <div className="about__comp">
                        <h2>About me</h2>

                        <ul className="footer__ul">
                            <li className="footer__li">
                                <a href="#">How i work </a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Testimonials</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">join team  </a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Terms and services </a>
                            </li>

                        </ul>
                    </div>
                </Grid>

                <Grid item lg={5} sm={6} xs={12}>
            
                    <div className="contactme__comp">
                        <h2>Contact  me</h2>
                        <ul className="footer__ul">
                            <li className="footer__li">
                                <a href="#">mobile</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">email</a>
                            </li>
                        </ul>
                    </div>
                </Grid>

               
              
            </Grid>

            <Grid container>


            <Grid item lg={2} sm={6} xs={12}>
              
                    <div className="name__comp">
                        <h2> parichit</h2>
                    </div>
                </Grid>

               
                <Grid item lg={5} sm={6} xs={12}>
           
                    <div className="copyright">
                      <p>@parichit all rights reserved</p>

                    </div>
                </Grid>
                <Grid item lg={5} sm={6} xs={12}>
               
                    <div className="icons__comp">

                        <a href="#" className=" icons">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                       
                        <a href="#" className="icons">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="#" className="icons">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </Grid>



            </Grid>






        </div>
    );
}

export default Footer;