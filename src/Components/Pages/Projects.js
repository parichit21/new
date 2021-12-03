import React, { Component } from 'react';
import "./PagesCSS/Projects.css"
import Grid from '@mui/material/Grid';
import image from "../Pages/PagesCSS/Images/instaclone.PNG"
function project() {
  return (
    <div className="project">
      <Grid container>
        {/* <Grid item lg={4} sm={6} xs={12}>
        <h2>left</h2>
              </Grid> */}

        <Grid item lg={12} sm={12} xs={12}>
          <div className="Project__disc">
            <h1>Projects</h1>
            <p> Some of my projects are mentioned below </p>
          </div>
        </Grid>

        {/* <Grid item lg={4} sm={6} xs={12}>
                  <h2>right</h2>
                  </Grid> */}

      </Grid>

      <Grid container className="grid3">

        <Grid className="grid__cardstart" item lg={3} sm={6} xs={12}>

          {/* start */}
          <div class="services__wrapper">
            <div class="services__card">
              <img className="project__image" src={image} />
              <h2>Need</h2>
              <p>FullStack application</p>
              <div className="btn__div">
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Github Link </button></div>
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Know more </button></div>
              </div>
            </div>
          </div>
          {/* end */}
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <div class="services__wrapper">
            <div class="services__card">
              <img className="project__image" src={image} />
              <h2>Need</h2>
              <p>FullStack application</p>
              <div className="btn__div">
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Github Link </button></div>
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Know more </button></div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <div class="services__wrapper">

            <div class="services__card">
              <img className="project__image" src={image} />
              <h2>Need</h2>
              <p>FullStack application</p>
              <div className="btn__div">
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Github Link </button></div>
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Know more </button></div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <div class="services__wrapper">
            <div class="services__card">
              <img className="project__image" src={image} />
              <h2>Need</h2>
              <p>FullStack application</p>
              <div className="btn__div">
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Github Link </button></div>
                <div class="services__btn"><button onclick="window.location.href = 'https://github.com/parichit21';" >Know more </button></div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>


    </div>
  );
}

export default project;