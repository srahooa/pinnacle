import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'
import '../styles/home.scss'



export default function HomeView() {

    return (
        <>
            <NavBar/>
            <Header/>
            <div id="home-view">
                <h1>Here to put your words in the right order</h1>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}