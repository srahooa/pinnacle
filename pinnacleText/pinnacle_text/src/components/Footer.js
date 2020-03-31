import React from 'react'
// import { Link, Route } from 'react-router-dom'
import { IconContext } from "react-icons"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../styles/footer.scss'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <IconContext.Provider value={{className: "react-icons", size: "2em" }}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/alison.bailey.14">
                        <FaFacebook />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                        <FaInstagram />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alison-bailey-8370ba13/">
                        <FaLinkedin/>
                    </a>
                </IconContext.Provider>
                <div id="credit">
                    Built by SooAldrich, 2020
                </div>
            </div>
        </>
    )
}
