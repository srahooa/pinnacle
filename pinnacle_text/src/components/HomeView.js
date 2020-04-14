import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import Testimonials from './Testimonials'

import { FaFileAlt, FaPhone, FaUserEdit }  from 'react-icons/fa'
import { IconContext } from "react-icons"

import '../styles/home.scss'


export default function HomeView() {

    return (
        <>
            <NavBar/>
            <Header/>
            <div className="home-view">
                <h3>Here to put your words in the right order</h3>
                <div id="quick-links">
                    <Link to='/contact' id="buttons">Send Pages</Link>
                    <Link to='/services' id="buttons">Learn More</Link>
                </div>
                <IconContext.Provider value={{ className: 'react-icons', size: "3em"}}>
                    <div id="icon">
                        <FaFileAlt/>
                    </div>
                </IconContext.Provider>
                <p>Send pages or project summary.</p>

                <IconContext.Provider value={{ className: 'react-icons', size: "3em"}}>
                    <div id="icon">
                        <FaPhone/>
                    </div>
                </IconContext.Provider>
                <p>Schedule phone consult or meeting.</p>

                <IconContext.Provider value={{ className: 'react-icons', size: "3em"}}>
                    <div id="icon">
                        <FaUserEdit/>
                    </div>
                </IconContext.Provider>
                <p>Review & approve proposal.</p>

                <div id="recent-work">
                    <h2>Recent Work</h2>
                    <p>Example 1</p>
                    <p>Example 2</p>
                    <p>Example 3</p>
                </div>
                <div id="testemonials">
                    <h2>Testimonials</h2>
                    <div className="card">
                        <Testimonials/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}