import React from 'react'
import { Link } from 'react-router-dom'
import { Fa }  from 'react-icons/fa'

import '../styles/navbar.scss'



export default function NavBar() {
    function menuToggle() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    return (
        <>
            <div className="nav">
                <div id="myLinks">
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/about'>About Me</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                {/* <a href="javascript:void(0);" class="icon" onClick="menuToggle()">
                    <i class="fa fa-bars"></i>
                </a> */}
            </div>
        </>
    )
}
