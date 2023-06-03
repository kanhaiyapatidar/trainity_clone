import React from 'react'
import '../style/landingPage.css'
const LandingPage = () => {
  return (
    <div>
      <div className='landingPage' >
        <div className='landingPageLeft'>
        <div className='landingPageLeftDiv1'>
        <div className="home-check-img"></div>
        <div>₹ 0 Effective Fee</div>
        </div>
        <div className="heading">
            Land your dream <span style={{color:"green"}}>Internship/</span>
            <span style={{color:"green"}}>Job</span>
          </div>
          <div className="home-line-3">
            Get trained, work on live projects and get hired in just 12 Weeks
          </div>
          <div className="home-buttons">
            <button className="btnReguster">
              Register for Free
            </button>
           <button className='btnExplore'>Explore Tracks</button>
          </div>
          <div className="RegistrartionTime" >Registration Closing:&nbsp;
           <span class="_time">8:00 PM</span>,&nbsp;
           <span class="set-date">
           <span class="_date">
           <span class="._date">2<sup>nd</sup></span></span>
           <span class="_month">Jun</span></span>,&nbsp;<span class="_year">2023</span></div>
        </div>
        <div className='landingPageRight'>
      
             <img className="rightPageImg" src=" https://trainity.in/Hero_Image1.webp" alt="hero-img"/>
        
        </div>
      </div>
    </div>
  )
}

export default LandingPage
