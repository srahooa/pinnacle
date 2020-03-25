import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import Header from './Header'
import '../styles/services.scss'

export default function ServicesView() {
    return (
        <>
            <NavBar/>
            <Header/>
            <div class="services">
                <h1>SERVICES</h1>
                <div id="contianer">
                    <h2>Writing</h2>
                        <p>Business owners: Are you certain the text on your website and in your marketing materials clearly conveys what you offer? The wrong words in the wrong order could be costing you business. Let Pinnacle Text write fresh copy for your organization and feel confident in what you convey.</p>
                        <p>Schedule a consult for a free review of your marketing texts.</p>
                    <h2>Editing</h2>
                        <p>Business owners: Are you certain the text on your website and in your marketing materials clearly conveys what you offer? The wrong words in the wrong order could be costing you business. Let Pinnacle Text write fresh copy for your organization and feel confident in what you convey.</p>
                        <p>Schedule a consult for a free review of your marketing texts.</p>
                    <h3>Level 1: Proofreading</h3>
                        <p>Proofreading is a check for basic errors in spelling, grammar, punctuation, and sentence structure. Best suited for organizations and individuals who are already confident in their copy but want a final third-party read-through to ensure perfection. </p>
                    <h3>Level 2: Line Editing</h3>
                        <p>Line editing is necessary when you're confident in the ideas your text conveys but aren't sure if you're conveying them clearly. Pinnacle Text will re-structure sentences, strengthen word choice, and eliminate redundancies.</p>
                    <h3>Level 3: Developmental Editing</h3>
                        <p>Also called "substantive" editing, this is the most in-depth service Pinnacle Text provides. This is the "heavy lifting" of the editing world, necessary when your document needs to be re-organized for clarity or your ideas need to be further developed.</p>
                        <p>If you are a fiction writer or working on your autobiography or memoir, Pinnacle Text is qualified to help you develop your manuscript. </p>
                    <Link id="buttons">Send Pages</Link>
                
                </div>
            </div>
        </>
    )
}
