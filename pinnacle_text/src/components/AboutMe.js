import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import '../styles/about.scss'

export default function() {

    return (
        <>
            <NavBar/>
            <Header/>
                <div className="about">    
                <h1>About Me</h1>
                    <div id="about-container">
                        <div id="pic">
                            <img src={require(`../assets/Ali.png`)} alt="Alison Bailey in Scotland"/>
                            <p>Arthur’s Seat is an extinct volcano in Edinburgh, Scotland. Hello from the top!</p>
                        </div>
                        <div id="text">
                            <p>Pinnacle Text is owned and operated by Alison Bailey.</p>
                            <p>Alison was born and raised in Washington State. Between 2005 and 2010 she lived in all four contiguous U.S. time zones. In 2011, Pinnacle Text was born the rogue imprint on a series of small books made by hand in the second bedroom of an 800 square foot house in Wisconsin.</p>
                            <p>In 2014, back in Washington, Alison earned a Master of Fine Arts degree in Literary Fiction. She graduated and took a job at a book printing company in Lewis County. Here she absorbed the fundamentals and subtleties of both printing and publishing, and picked up editing gigs from the authors who called from all over the country ready to self-publish their books.</p>
                            <p>Alison left the book printing shop late in 2017 for an opportunity to manage projects and client relationships at a full-service printer in Pierce county. In 2019 she moved into a marketing role and began to study marketing strategy, particularly as it relates to the centuries-old narrative structures she practiced in grad school.</p>
                            <p>She rebooted Pinnacle Text because she is eager to help organizations and individuals tell their stories with the words in the right order. </p>
                        </div>
                    </div>    
                </div>
            <Footer/>
        </>
    )
}
