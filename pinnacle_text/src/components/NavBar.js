import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars }  from 'react-icons/fa'
import { IconContext } from "react-icons"
// import Burgermenu from './BurgerMenu'
// import CollapseMenu from './CollapseMenu'

import '../styles/navbar.scss'

export default function NavBar() {
  
  let toggleNav = false;

  let handleMenu = () => {
    if (toggleNav === false) {
      document.getElementById("menuItems").style.visibility = "hidden"
      // getSidebar.style.width = "272px";
      // getSidebar.style.opacity = "o.5"
    } else {
      document.getElementById("menuItems").style.visibilty = "visible"
    }
  }
  return (
      <>
      <nav className="nav">
        <div className="hamburger">
          <IconContext.Provider value={{ className: 'react-icons', size: "1.8em"}}>
            <div className="menuIcon" id="toggle" onClick={handleMenu}>
              <FaBars/>
            </div>
          </IconContext.Provider>
        </div>
        <aside id="menuItems">
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          {/* <Link to='/portfolio'>Portfolio</Link> */}
          <Link to='/about'>About Me</Link>
          <Link to='/contact'>Contact</Link>
        </aside>
  


      {/* <button className="hamburger hamburger--collapse" type="button"
              aria-label="Menu" aria-controls="navigation" aria-expanded="true/false">
          <span className="hamburger-box">
          <span className="hamburger-inner"></span>
          </span>
      </button> */}

      <div id="desktopNav">
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          {/* <Link to='/portfolio'>Portfolio</Link> */}
          <Link to='/about'>About Me</Link>
          <Link to='/contact'>Contact</Link>
      </div>
      </nav>
      </>
  )
}
