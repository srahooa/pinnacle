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
            <div className="contactPage">
                <h1>Contact</h1>
                <h3>Get in touch with your project, questions, or just say 'hi'...</h3>
                <div id="contactForm">
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <div id="message">
                            <textarea id="textbox" name="message" placeholder="Project description... Inquiries... Fun facts..."></textarea>
                            <label id="messageLabel">Message</label>
                        </div>
                        <div id="name">
                            <label id="nameLabel">Name</label>
                            <input id="nameInput" type="text" name="name"></input>
                        </div>
                        <div id="phone">
                            <label id="phoneLabel">Phone Number</label>
                            <input id="phoneInput" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                        </div>
                        <div id="email">
                            <label id="emailLabel">Email</label>
                            <input input id="emailInput" type="email" name="email"></input>
                        </div>
                        <div>

                        </div>
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}