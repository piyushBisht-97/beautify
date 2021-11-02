import React from 'react'
import {Link } from "react-router-dom"
import './documentation.css'
import "./home.css"

const Home = () => {
    return (
        <div className="cover">
        <div className="navbar">
        <img src="https://cdn5.f-cdn.com/contestentries/1865716/49856982/5fe10e434f37f_thumb900.jpg" width="150px" alt="logo"/>
            <div >
             <ul className="nav-links">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/docs">Docs</Link></li>
                 <li><Link to="/about">About</Link></li>
             </ul>

            </div>
            
        <a href="/page"><i className="fab fa-github fa-2x" ></i></a>
            
        </div>
        <div className="headings">
            <h1>Beauti-fy UI</h1>
            <p>A component library to make your web-application come to life..</p>
            <Link to="/docs" className="btn-main" >Getting Started</Link>
        </div>
        </div>
    )
}

export default Home
