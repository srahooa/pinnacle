import React from 'react'
import { IconContext } from "react-icons"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


import '../styles/construction.scss'

export default function() {

    return (
        <>
           <div className="construction">
               <img src={require(`../assets/logo_figma.png`)}></img>
                <h3>Writing | Editing | Print Consulting</h3>
                <h1 id="headingA">Website coming soon.</h1>
                <h2>Request a quote with alison@pinnacletext.com</h2>
                <div id="icons">
                    <IconContext.Provider value={{className: "react-icons", size: "2em" }}>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pinnacletext">
                            <FaFacebook />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pinnacletext">
                            <FaInstagram />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alison-bailey-8370ba13/">
                            <FaLinkedin/>
                        </a>
                    </IconContext.Provider>
                </div>
           </div>
        </>
    )
}
