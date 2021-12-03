import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import "./PagesCSS/Contactus.css"
import { useState } from "react"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faPinterest,
    faTwitch,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';


function Contactus() {

    const [Values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            Name: event.target.value,

        }));
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleSubjectInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            subject: event.target.value,
        }));
    };

    const handleMessageInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            message: event.target.value,
        }));
    };

    return (
        <div className="contactus__background">
            <Grid container>
                <Grid className="quotes" item lg={12} sm={12} xs={12}>
                    <p><span>"</span>Take up one idea. Make that one idea your life--think of it,
                        dream of it, live on that idea. Let the brain, muscles, nerves,
                        every part of your body, be full of that idea, and just leave every
                        other idea alone. This is the way to success.<span>"</span></p>
                    <h4>--Swami Vivekananda</h4>
                </Grid>

                <Grid container className="heading" item lg={12} sm={12} xs={12} >
                    <Grid item lg={2} sm={3} xs={12}>
                     
                    </Grid>
                    <Grid item lg={8} sm={4} xs={12}>
                        <h1> Lets Connect</h1>
                        <div className="devider__container">
                            {/* <div className="mainpage__devider"></div>
                    <div><h2>X</h2></div>
                    <div className="mainpage__devider1"></div> */}
                        </div>
                        <h2> I will be glad to answer your question</h2>
                    </Grid>
                    <Grid item lg={2} sm={3} xs={12}>
                        
                    </Grid>
                    {/* <h1> Lets Connect</h1>
                  <div className="devider__container">
                    <div className="mainpage__devider"></div>
                    <div><h2>X</h2></div>
                    <div className="mainpage__devider1"></div>
                    </div>
                    <h2> i will be glad to answer your question</h2> */}
                </Grid>




                <Grid item lg={2} sm={3} xs={12}>

                </Grid>
                <Grid item lg={8} sm={6} xs={12}>


                    <div className="form">
                        <input id="Name"
                            className="form-field"
                            type="text"
                            placeholder=" Name"
                            name="Name"
                            value={Values.Name}
                            onChange={handleNameInputChange} />
                        <br />


                        <input id="Email"
                            className="form-field"
                            type="text"
                            placeholder="Email Address"
                            name="Email"
                            value={Values.email}
                            onChange={handleEmailInputChange} />
                        <br />


                        <input id="subject"
                            className="form-field"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={Values.subject}
                            onChange={handleSubjectInputChange} />
                        <br />


                        <textarea id="message"
                            className="form-field"
                            type="textare"
                            placeholder="your Message"
                            name="Message"
                            value={Values.message}
                            onChange={handleMessageInputChange} />


                    </div>

                </Grid>

                <Grid item lg={2} sm={4} xs={12} >
                </Grid>

                <Grid className="send__button" item lg={12} sm={12} xs={12}>
                    <Button className="button" variant="outlined">Send Message</Button>
                </Grid>
            </Grid>
            <Stack  className="social__bar"    direction="row">
                <h1> I am Social</h1>
          
            </Stack>
            <Stack  className="line" direction="row">
            <div className="mainpage__devider1"></div>

            </Stack>

            {/* <div className="mainpage__devider1"></div> */}



            <Stack className="social__icon" spacing={2} direction="row">
                <div className="icons__comp">

                    <a href="#" className=" icons">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>

                    <a href="#" className="icons">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    <a href="#" className="icons">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <a href="#" className="icons">
                        <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </a>
                   
                    <a href="#" className="icons">
                        <FontAwesomeIcon icon={faPinterest} size="3x" />
                    </a>
                </div>
            </Stack>

        </div>
    );
}

export default Contactus;