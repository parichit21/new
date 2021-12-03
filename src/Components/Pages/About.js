import React, { Component } from 'react';
import "./PagesCSS/About.css"
import Grid from '@mui/material/Grid';
import jb from '../Pages/PagesCSS/Images/jb.png'
import Stack from '@mui/material/Stack';

const names = ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'Reactjs', 'Selenium']

function About() {

    return (
        <div className="About__page">

            <Grid container>

                <Grid item lg={6} sm={6} xs={12}>
                    <div className="image__container">

                        <h2></h2>
                        <img className="image" src={jb} />
                    </div>

                </Grid>

                <Grid className="About" item lg={6} sm={6} xs={12}>
                    <h1>Who am i ?</h1>
                    <p>
                        <span>B</span>.TECH(CSE) Student Graduating in 2022. <span>H</span>aving a creative mindset Linking
                        the meet of audiences From BackEnd To FrontEnd.
                        <span>W</span>ant  to be a Full Stack Developer,
                        Knows every details of a website from the layout to the  <span>D</span>atabase.  <span>W</span>ith the experiance
                        of 1 year in this feild.Can make a full working website From a Scratch.
                        <span>H</span>aving some insites on  HTML Javascript SpringBoot J2EE Hybernate  CSS and React.

                    </p>
                </Grid>

            </Grid>

            <Grid container>
                <Grid item lg={12} sm={12} xs={12}>

                    <div className="heading">
                        <h1> Known Tech </h1>
                    </div>

                    <Stack className="stack" direction="row" spacing={10}>
                        {

                            names.map((name) => {
                                return (
                                    <Stack className="stack" direction="row" spacing={4}>
                                    <div class="outer_circle">
                                        <p>	  </p>
                                        <div class="inner_circle">
                                            <p>{name}</p>
                                        </div>
                                    </div>
                                    </Stack>
                                )
                            })
                         } 


                    </Stack>

                </Grid>
            </Grid>



        </div>
    );
}

export default About;