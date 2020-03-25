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
                <p>Here to put your words in the right order</p>
                <div id="quick-links">
                    <Link id="buttons">Send Pages</Link>
                    <Link id="buttons">Learn More</Link>
                </div>
                <div id="recent-work">
                    <p>Example 1</p>
                    <p>Example 2</p>
                    <p>Example 3</p>
                </div>
                <div id="testemonials">
                    <p>Alison is great!!!</p>
                </div>
            </div>
        </>
    )
}