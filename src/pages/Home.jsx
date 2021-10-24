import React from 'react'
import Navbar from './Navbar'
import {Routes,Route,Link} from "react-router-dom"


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
            <div className="Home">
            <i class="fas fa-spray-can"></i>
             <h2 className="main-heading"> Welcome to Beautify UI</h2>
             <h3 className="sub-heading"> Let's build a beautiful website together so that you show your work to your peers. </h3>
              
             <Link to="/docs" className="btn-main">Get Started</Link>
            </div>
            </div>
            <p className="tag-line">
          Made with <i class="fas fa-heart"></i> by Piyush Bisht
        </p>
        </div>
    )
}

export default Home
