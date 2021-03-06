import React from 'react'
import { Link as Linkr} from 'react-router-dom'
import {Link} from 'react-scroll'
import './component.css'
import './documentation.css'
const Documentation = () => {
    return (
      <div className="container">
        <div className="navbar" >
        <img src="https://cdn5.f-cdn.com/contestentries/1865716/49856982/5fe10e434f37f_thumb900.jpg" width="150px" alt="logo"/>
            <div >
             <ul className="nav-links">
                 <li><Linkr to="/">Home</Linkr></li>
                 <li><Linkr to="/docs">Docs</Linkr></li>
                 {/* <li><Linkr to="/about">About</Linkr></li> */}
             </ul>

            </div>
            
        <a href="https://github.com/piyushBisht-97"><i className="fab fa-github fa-2x" ></i></a>
            
        </div>
       <main className="main">
       <div>
         <h1>Installation</h1>
         <p>
          Copy the following code in the head tag of your HTML document and you
          are good to go:
        </p>

        <div style={{ padding: "0rem" }} className="codeBox">
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fbrave-nightingale-2d2250.netlify.app%252F%252Fstyle.css%2522%2520%252F%253E"
  style={{width: "866px", height: "206px", border:"0", transform: "scale(1)", overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
 </div>
       
       <hr />

       {/* navbar */}


       <div className="nav-component white" >
         <h2>Nav-Bars</h2>
       <nav className="items">

  <h2>Beauti-fy</h2>

  <ul className="nav-links">
    <li><a href="/docs">HOME</a></li>
    <li><a href="/docs">PRODUCTS</a></li>
    <li><a href="/docs">LOGIN</a></li>
  </ul>
  <input className="search" placeholder="Search"/>
  </nav>
  </div>

       <div className="nav-component black">
         
       <nav className="items">

  <h2>Beauti-fy</h2>

  <ul className="nav-links">
    <li><a href="Home">HOME</a></li>
    <li><a href="Products">PRODUCTS</a></li>
   
    <li><a href="Login">LOGIn</a></li>
  </ul>
  <input className="search" placeholder="Search"/>

       </nav>
      </div>

      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522nav-component%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253ENavBars%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%253Cnav%2520className%253D%2522items%2522%253E%250A%250A%2520%2520%253Ch2%253EBeauti-fy%253C%252Fh2%253E%250A%250A%2520%2520%253Cul%2520className%253D%2522nav-links%2522%253E%250A%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%2522%252Fpage%2522%253EHOME%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%2522%252Fpage%2522%253EPRODUCTS%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%2522%252Fpage%2522%253EABOUT%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%2522%252Fpage%2522%253ELOGIN%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%253C%252Ful%253E%250A%2520%2520%253Cinput%2520className%253D%2522search%2522%2520placeholder%253D%2522Search%2522%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%253C%252Fnav%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width: "556px", height: "546px", border:"0", transform: "scale(1)", overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin">
</iframe>
       <hr/>


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

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522btn%2520btn-component%2522%253E%250A%2520%2520%253Ch2%253EBUTTONS%253C%252Fh2%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-secondary%2522%253ESecondary%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-success%2522%253ESuccess%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-danger%2522%253EDanger%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-warning%2522%253EWarning%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-info%2522%253EInfo%253C%252Fbutton%253E%250A%250A%253Ch2%253EOUTLINE%2520BUTTONS%253C%252Fh2%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-outline-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-outline-secondary%2522%253ESecondary%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-outline-success%2522%253ESuccess%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-outline-danger%2522%253EDanger%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-outline-warning%2522%253EWarning%253C%252Fbutton%253E%250A%253Cbutton%2520%2520className%253D%2522btn%2520btn-outline-info%2522%253EInfo%253C%252Fbutton%253E%250A%250A%250A%253C%252Fdiv%253E"
  style={{width: "678px", height: "566px", border:"0", transform: "scale(1)", overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
<hr/>
<div>
<div className="floating_btn">
  <h2>Floating Action Button</h2>
  <button className="floating_btn_small">+</button>
  <button className="floating_btn_medium">+</button>
  <button className="floating_btn_large">+</button>
  
</div>
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522floating_btn%2522%253E%250A%2520%2520%253Ch2%253EFloating%2520Action%2520Button%253C%252Fh2%253E%250A%2520%2520%253Cbutton%2520className%253D%2522floating_btn_small%2522%253E%252B%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520className%253D%2522floating_btn_medium%2522%253E%252B%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520className%253D%2522floating_btn_large%2522%253E%252B%253C%252Fbutton%253E%250A%2520%2520%250A%250A%253C%252Fdiv%253E"
  style={{width: "573px", height: "346px", border:"0", transform: "scale(1)", overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin"> 
</iframe>

</div>
<hr/>

<div className="component-details" id="alerts">
          <h2>Alerts</h2>
          <div className="alert alert-error">
            
            <p> There seems to be an error</p>
          </div>
         
          <div className="alert alert-success">
           
            <p> Everything seems to be working great</p>
          </div>
         
          <div className="alert alert-warning">
            
            <p> Warning! Check your code</p>
          </div>
         
          <div className="alert alert-info">
            
            <p> FYI! Just informing you</p>
          </div>
         
          <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522component-details%2522%2520id%253D%2522alerts%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EAlerts%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520alert-error%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%2520There%2520seems%2520to%2520be%2520an%2520error%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520alert-success%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%2520Everything%2520seems%2520to%2520be%2520working%2520great%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520alert-warning%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%2520Warning%21%2520Check%2520your%2520code%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520alert-info%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%2520FYI%21%2520Just%2520informing%2520you%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width: "606px", height: "666px", border:"0", transform: "scale(1)", overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>


        <hr/>


{/* cards */}
<div className="cards" id="card">
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
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522cards%2522%253E%250A%253Ch2%253ECards%253C%252Fh2%253E%250A%253Cmain%2520className%253D%2522grid%2522%253E%250A%2520%2520%250A%2520%2520%253Carticle%253E%250A%2520%2520%2520%2520%253Cimg%2520className%253D%2522image_light%2522%2520src%253D%2522https%253A%252F%252Fi.pinimg.com%252F564x%252F6f%252F3d%252Fbf%252F6f3dbfdf8788d8d8063e032f4b7c877a.jpg%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%2520%2520%2520%2520%250A%2520%2520%253C%252Farticle%253E%250A%250A%250A%2520%2520%253Carticle%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fhelios-i.mashable.com%252Fimagery%252Freviews%252F01VF7MfWsdzSTpxBsup7lCb%252Fhero-image.fill.size_1248x702.v1623391656.jpg%2522%2520alt%253D%2522%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch3%253EMacbook%2520Pro%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253ERs%25201%252C00%252C000%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%253ECart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Farticle%253E%250A%250A%250A%2520%2520%253Carticle%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fwww.xda-developers.com%252Ffiles%252F2021%252F08%252FGoogle-Pixel-6-with-Material-You-2.jpg%2522%2520alt%253D%2522%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch3%253EPixel%25206%2520Pro%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253ERs%252060%252C000%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%253ECart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Farticle%253E%250A%250A%253C%252Fmain%253E%250A%253C%252Fdiv%253E"
  style={{width: "1024px" , height: "846px" , border:"0" , transform: "scale(1)" , overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
<hr/>

 
       <div className="badge-container">
<h2>Badge on Cards</h2>
<main className="card-detail">
  
  
    <img src="https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg" alt=""/>
    <div className="text">
      <h3>Apple Iphone13</h3>
      <p>Rs 1,00,000</p>
      <button>Add to Cart</button>
      
    </div>
    <span className="badge">Coming Soon</span>
  
  </main>

  </div>
  <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%2522badge-container%2522%253E%250A%253Ch2%253EBadge%2520on%2520Cards%253C%252Fh2%253E%250A%253Cmain%2520className%253D%2522card-detail%2522%253E%250A%2520%2520%250A%2520%2520%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fm.media-amazon.com%252Fimages%252FI%252F61nPiOOv9BL._SL1500_.jpg%2522%2520alt%253D%2522%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch3%253EApple%2520Iphone13%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253ERs%25201%252C00%252C000%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%253ECart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cspan%2520className%253D%2522badge%2522%253EComing%2520Soon%253C%252Fspan%253E%250A%2520%2520%250A%2520%2520%253C%252Fmain%253E%250A%2520%2520%253C%252Fdiv%253E"
  style={{width: "833px" , height: "506px" , border:"0" , transform: "scale(1)" , overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin">
</iframe>
  <hr/>

  <div className="component-details" id="avatar">
          <h2>Avatar</h2>

          <div>
            <div>
              <div class="avatar">
                <img
                  src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                  class="avatar-image" alt=""
                />
              </div>

              <div class="avatar">
                <img
                  src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                  class="avatar-border-image avatar-border" alt=""
                />
              </div>
            </div>
            <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28248%2C5%2C155%2C1%29&t=solarized+light&wt=none&l=auto&ds=false&dsyoff=35px&dsblur=62px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=149%25&si=false&es=2x&wm=false&code=%253Cimg%2520class%253D%2522avatar%2522%2520src%253D%2522Your%2520Image%2522%2520%252F%253E%250A%253Cimg%2520class%253D%2522avatar%2520avatar-border%2522%2520src%253D%2522Your%2520Image%2522%2520%252F%253E"
  style={{width: "581px", height: "226px", border:"0", transform: "scale(1)", overflow:"hidden"}} title="code-snippet"
  sandbox="allow-scripts allow-same-origin">
</iframe>
          </div>
        </div>
       <hr/>
      </main>




        <div className="sidebar">
        <Link
           activeClass="activeClass"
            to="nav-component"
            spy={true}
            smooth={true}
            className="button-nav navbar-btn"
          >
            NavBar
          </Link>
         
          <Link
            to="btn"
            activeClass="activeClass"
            spy={true}
            smooth={true}
            duration={1000}
            className="button-nav buttons-btn"
          >
            Buttons
          </Link>
          <Link
            to="floating_btn"
            activeClass="activeClass"
            spy={true}
            smooth={true}
            className="button-nav floating-button"
          >
            Floating Buttons
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
          activeClass="activeClass"
            to="card"
            spy={true}
            smooth={true}
            className="button-nav card-btn"
          >
            Cards{" "}
          </Link>
          <Link
            to="card-detail"
            activeClass="activeClass"
            spy={true}
            smooth={true}
            className="button-nav card-badge-btn"
          >
            Badges
          </Link>
          <Link
            to="avatar"
            activeClass="activeClass"
            spy={true}
            smooth={true}
            className="button-nav avatar-btn"
          >
            {" "}
            Avatar
          </Link>
        

        </div>
        
        
        <footer className="footer">Made with ?????? by Piyush Bisht</footer>

      </div>
    )
}

export default Documentation
