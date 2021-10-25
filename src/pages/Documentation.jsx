import React from 'react'
import {Route,Routes, Link} from 'react-router-dom'
import './component.css'
import './documentation.css'
const Documentation = () => {
    return (
      <div className="container">
       <nav className="navbar">

 <h1>Beauti-fy</h1>

<div>
   <ul className="nav-links">
  <li><a>HOME</a></li>
  <li><a>DOCS</a></li>
  <li><a><i className="fab fa-github"></i></a></li>
  
  </ul>
  </div>

       </nav>
       <main className="main">
       <div>
         <h2>Installation</h2>
         <p>
          Copy the following code in the head tag of your HTML document and you
          are good to go:
        </p>

        <div style={{ padding: "0rem" }} className="codeBox">
          <iframe
            src="https://carbon.now.sh/embed/F2ZngG8Kjrcwphl2TAHL" title="navbar"
            style={{
              width: "44rem",
              // height: "129px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
 </div>
       
       <hr />

       {/* navbar */}
       <div className="nav-component">
         <h2>NavBars</h2>
       <nav className="items">

  <h2>Beauti-fy</h2>

  <ul className="nav-links">
    <li><a>HOME</a></li>
    <li><a>PRODUCTS</a></li>
    <li><a>ABOUT</a></li>
    <li><a>LOGIN</a></li>
  </ul>
  <input className="search" placeholder="Search"/>

       </nav>

       </div>

       <div className="nav-component">
         
       <nav className="items">

  <h2>Beauti-fy</h2>

  <ul className="nav-links">
    <li><a>HOME</a></li>
    <li><a>PRODUCTS</a></li>
    <li><a>ABOUT</a></li>
    <li><a>LOGIn</a></li>
  </ul>
  <input className="search" placeholder="Search"/>

       </nav>

       </div>
<div className="btn btn-component">
  <h2>BUTTONS</h2>
<button  className="btn btn-primary">Primary</button>
<button  className="btn btn-secondary">Secondary</button>
<button  className="btn btn-success">Success</button>
<button  className="btn btn-danger">Danger</button>
<button  className="btn btn-warning">Warning</button>
<button  className="btn btn-info">Info</button>

<h2>OUTLINE BUTTONS</h2>
<button  className="btn btn-outline-primary">Primary</button>
<button  className="btn btn-outline-secondary">Secondary</button>
<button  className="btn btn-outline-success">Success</button>
<button  className="btn btn-outline-danger">Danger</button>
<button  className="btn btn-outline-warning">Warning</button>
<button  className="btn btn-outline-info">Info</button>


</div>
<hr/>
<div className="floating_btn">
  <h2>Floating Action Button</h2>
  <button className="floating_btn_small">+</button>
  <button className="floating_btn_medium">+</button>
  <button className="floating_btn_large">+</button>
  

</div>
<hr/>
<div className="cards">
<h2>Cards</h2>
<main className="grid">
  
  <article>
    <img className="image_light" src="https://i.pinimg.com/564x/6f/3d/bf/6f3dbfdf8788d8d8063e032f4b7c877a.jpg" alt="" />
    
  </article>


  <article>
    <img src="https://helios-i.mashable.com/imagery/reviews/01VF7MfWsdzSTpxBsup7lCb/hero-image.fill.size_1248x702.v1623391656.jpg" alt=""/>
    <div className="text">
      <h3>Macbook Pro</h3>
      <p>Rs 1,00,000</p>
      <button>Cart</button>
    </div>
  </article>


  <article>
    <img src="https://www.xda-developers.com/files/2021/08/Google-Pixel-6-with-Material-You-2.jpg" alt=""/>
    <div className="text">
      <h3>Pixel 6 Pro</h3>
      <p>Rs 60,000</p>
      <button>Cart</button>
    </div>
  </article>

</main>
</div>
<hr/>

<div className="component-details" id="alerts">
          <h2>Alerts</h2>
          <div class="alert alert-error">
            
            <p> There seems to be an error</p>
          </div>
         
          <div class="alert alert-success">
           
            <p> Everything seems to be working great</p>
          </div>
         
          <div class="alert alert-warning">
            
            <p> Warning! Check your code</p>
          </div>
         
          <div class="alert alert-info">
            
            <p> FYI! Just informing you</p>
          </div>
         
          <iframe
            src="https://carbon.now.sh/embed/RJsfL0pmQzZzd5Vcpoil" title="copy-link"
            style={{
              marginLeft: "1rem",
              marginBottom: "-5rem",
              width: "40rem",
              height: "40rem",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>


       </main>
        <div className="sidebar">
        <Link
            to="navbar"
            spy={true}
            smooth={true}
            className="button-nav navbar-btn"
          >
            NavBar
          </Link>
          <Link
            to="card"
            spy={true}
            smooth={true}
            className="button-nav card-btn"
          >
            Cards{" "}
          </Link>
          <Link
            to="button"
            spy={true}
            smooth={true}
            className="button-nav buttons-btn"
          >
            Buttons
          </Link>
          <Link
            to="floating-btn"
            spy={true}
            smooth={true}
            className="button-nav floating-button"
          >
            Outline Buttons
          </Link>
          <Link
            to="alerts"
            spy={true}
            smooth={true}
            className="button-nav alerts"
          >
            Alerts
          </Link>
          <Link
            to="badge-card"
            spy={true}
            smooth={true}
            className="button-nav card-badge-btn"
          >
            Badges
          </Link>
          <Link
            to="avatar"
            spy={true}
            smooth={true}
            className="button-nav avatar-btn"
          >
            {" "}
            Avatar
          </Link>
        

        </div>
        <div id="content1">Content 1</div>
        <div id="content2">Content 1</div>
        <div id="content3">Content 1</div>
        
        <footer>Footer</footer>

      </div>
    )
}

export default Documentation
