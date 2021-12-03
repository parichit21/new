import React, { Component } from 'react';
import "../Pages/PagesCSS/Blogs.css"
import image from '../Pages/PagesCSS/Images/jb.png'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Subblog from './Subblog';

function Blogs() {
    return (
        <div className="card">
            <Grid container>
                <Grid item lg={6} sm={6} xs={12} >
                    <div className="card__container">
                        <div className="image__container">
                            <img src={image} alt='' />
                        </div>
                        <div className="card_title">
                            <h2>hellow</h2>
                        </div>

                        <div className="card_body">
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

                    <Grid items lg={12} sm={6} xs={12} >
               <Subblog/>
                    </Grid >

                </Grid>
                
                {/* test */}

                <Grid item lg={6} sm={6} xs={12}>

                    <Stack direction="column" spacing={2}>
                    
                    <Subblog />

                    <Grid items lg={12} sm={6} xs={12} >
                   <Subblog/>
                    </Grid >


                    {/* <Grid items lg={12} sm={6} xs={12} >
               <Subblog/>
                    </Grid > */}
                   
                    </Stack>
                </Grid>

{/* test end */}



            </Grid>
        </div>
    );
}

export default Blogs;