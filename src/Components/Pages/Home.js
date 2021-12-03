import React, { Component } from 'react';
import "./PagesCSS/Home.css"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import jb from '../Pages/PagesCSS/Images/jb.png'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone
} from '@fortawesome/free-solid-svg-icons';
import Animation from './Animation';
function Home() {
    return ( 
        <div className="Home__background">
           <Grid container>

        {/* <Grid item  sm={0} > */}
        {/* <div className="left__container"> 
            <h2> left </h2>
            
        </div> */}
        {/* </Grid> */}

        {/* <Grid item xs={6}>  */}
        <Grid item lg={6} sm={6} xs={12}>
        <div className="image__container"> 
            {/* <h2> middle </h2> */}
            <h2></h2>
            {/* <Avatar  sx={{ width: 300, height: 300 }} alt="image" src="C:\Users\91965\Desktop\portfolio-frontend\portfolio-frontend\src\Components\Pages\PagesCSS\Images\jb.png" />
             */}
             <img className="image" src={jb}/>
        </div>
        
        </Grid>   

        {/* <Grid item  xs={6}>  */}
        <Grid item lg={6} sm={6} xs={12}>
       <div className="description">
        
        <h2></h2>

        {/* <h1> <span>My</span> name is Parichit .</h1>
       <h1> B.Tech Engineer </h1>
        <h3>(2018-2022)</h3> */}

          <Animation/>

        <Button className="button" variant="outlined">Lets talk</Button>
        </div>
        </Grid>


           </Grid>

           <Grid container >
           {/* <Grid xs={4}> */}
           <Grid item lg={4} sm={6} xs={12}>
              <div className="Aim__block">
               <h2> Aim</h2>
               <p>Want to be a Full Stack developer</p>
             </div>
               </Grid>
           {/* <Grid xs={4}>  */}
           <Grid item lg={4} sm={6} xs={12}>
               <div className="phone">
               <a href="#" className=" icons">
                            <FontAwesomeIcon className="phone__icon" icon={faPhone} size="2x" />
                           9650960517
             </a>
               </div>
               </Grid>
           {/* <Grid xs={4}>  */}
           <Grid item lg={4} sm={6} xs={12}>
         <div className="mail__icon">
           <a href="#" className=" icons">
                            <FontAwesomeIcon className="mail__envelope" icon={faEnvelope} size="2x" />
                            Parichitkukreti@gmail.com
             </a>
             </div>
           </Grid>
           </Grid>
           
        </div>
     );
}

export default Home;