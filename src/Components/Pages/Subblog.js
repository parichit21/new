import React, { Component } from 'react';
import "../Pages/PagesCSS/Blogs.css"
import image from '../Pages/PagesCSS/Images/jb.png'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Subblog() {
    return ( 
        <>
        <Grid items lg={12} sm={6} xs={12} >
                        <div className="container">
                              
                              <div className="small__container">
                              <Grid container>
                                    <Grid lg={6} sm={6} xs={12}>
                                <div className="img__container">
                                    <img src={image} alt="#" />
                                </div>
                                </Grid>

                                <Grid lg={6} sm={6} xs={12}>

                                <div className="title">
                                    <h2>title 2</h2>
                                </div>
                               </Grid>
                                    </Grid>

                                </div>


                                <div className="body">
                                    <p>Although cards can support multiple actions, UI controls,
                                and an overflow menu,use restraint and remember that cards
                                are entry points to more complex and detailed information.</p>
                                </div>
                                <div className="btn"> 
                                <Button className="read__btn"  variant="outlined">
                                {/* <a href="#"> */}
                                    Read more
                                {/* </a> */}
                            </Button>
                                </div>
                        </div>
                    </Grid >

        </>
     );
}

export default Subblog;