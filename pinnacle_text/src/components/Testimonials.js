import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import '../styles/testimonials.scss'



export default function Testimonials() {

    return (
        <>
            <div className="testimonials">
                <div id="card">
                    <p>We love Pinnacle Text!! Alison is amazing and so easy to work with! My company utilizes Pinnacle Text to refine marketing campaign messaging, get written content for website designs, and develop client off-boarding recommendation documents. We highly recommend her services!</p> 
                    <h5> -Angela K., Kelly Design</h5>
                </div>
                <div id="card">
                    <p>Ali is awesome!</p>
                    <h5> -Sarah A. Builder of site.</h5>
                </div>
            </div>
        </>
    )
}