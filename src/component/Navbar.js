/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import "../style/navbar.css"




const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);

  }
  useEffect(()=>{
 console.log(click)
  },[click])
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="">  
          <img src="https://trainity.in/assets/img/trainity/logo/2.svg" alt="" class="trainity-img"/>
          </a>
        </div>
        <div className="button">
        <ul  className={click?"nav-options act":"nav-options  none"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Tracks</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">About Us</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Fees</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">FAQ's</a>
          </li>
          <li className="option"  onClick={closeMobileMenu}>
            <button href="#" id="logIn">Log In</button>
          </li>
        </ul>
        </div>
      </div>
     
      <div className="mobile-menu" onClick={handleClick}>
        {click? 
         <CloseIcon/>
          
         : 
         <DensityMediumIcon/>
         
           
        }
      </div>
    </div>
  );
};

export default Navbar;
