import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'

export default function NavBar() {
    return (
        <>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/about'>About Me</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </>
    )
}
