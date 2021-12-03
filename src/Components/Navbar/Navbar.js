import React, { Component } from 'react';
import "./Navbar.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../Pages/Home';
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Contactus from "../Pages/Contactus";
import Projects from "../Pages/Projects";
import Grid from '@mui/material/Grid';
import { useState } from 'react';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <div  >
            <Router >
                <div className="navbar">
                    {/* <nav className="navbar__container" > */}
                       {/* <Grid item xs={3}> */}
                       <Grid container>
                       {/* <Grid item xs={3} > */}
                       <Grid item  xs={3}>
                           {/* <h2>Grid 1</h2> */}
                       </Grid>
                       <Grid item xs={3}>
                           {/* <h2>Grid 2</h2> */}
                       </Grid>
                       <Grid item lg={6} sm={6} xs={12}>  
                       {/* <Grid item xs ={6} > */}
                           {/* <div  > */}
                          <div onClick={handleClick}>
                           <i className={click? 'fas fa-times fa-2x':'fas fa-bars fa-2x'}  />
                           {/* <FontAwesomeIcon icon={}/> */}
                          </div>
                        <ul className={click ? 'nav-menu active': 'list'}  >
                            <li>
                                <Link to="/" onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={closeMobileMenu} >About</Link>
                            </li>
                            <li>
                                <Link to="/blogs " onClick={closeMobileMenu}>Blogs </Link>
                            </li>
                            <li>
                                <Link to="/projects " onClick={closeMobileMenu}>Projects </Link>
                            </li>
                            <li>
                                <Link to="/contactus " onClick={closeMobileMenu}>Lets talk </Link>
                            </li>
                        </ul>
                       {/* </div> */}
                        </Grid>
                    {/* </nav> */}
                    </Grid>
                </div>

                <div>
                    <Routes>

                        <Route path='/about' element={<About />} />
                        <Route path='/blogs' element={<Blogs />} />
                        <Route path='/contactus' element={<Contactus />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </div>
            </Router>



        </div>


    );
}

export default Navbar;