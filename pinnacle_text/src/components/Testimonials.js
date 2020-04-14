import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import '../styles/testimonials.scss'



export default function Testimonials() {

    return (
        <>
            <NavBar/>
            <Header/>
            <div className="testimonials">
                <div id="card">
                    <h5>We love Pinnacle Text!! Alison is amazing and so easy to work with! My company utilizes Pinnacle Text to refine marketing campaign messaging, get written content for website designs, and develop client off-boarding recommendation documents. We highly recommend her services!</h5> 
                    <p> -Angela K., Kelly Design</p>
                </div>
                <div id="card">
                    <h5>Ali is awesome!</h5>
                    <p> -Sarah A. Builder of site.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}