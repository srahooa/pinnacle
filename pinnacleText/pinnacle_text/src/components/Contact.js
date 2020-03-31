import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import '../styles/contact.scss'


export default function Contact() {

    return (
        <>
            <NavBar/>
            <Header/>
            <div id="container">
            <h1>Contact</h1>
            <h3>Drop me a line, I would love to hear from you.</h3>
            <form id="contactForm">
                <div id="message">
                    <textarea id="textbox"></textarea>
                    <label>Message</label>
                </div>
                <div id="name">
                    <label id="nameLabel">Name</label>
                    <input id="nameInput" type="text" name="name"></input>
                </div>
                <div id="email">
                    <label id="emailLabel">Email</label>
                    <input input id="emailInput" type="text" name="email"></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
            </div>
            <Footer/>
        </>
    )
}