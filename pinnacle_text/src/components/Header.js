import React from 'react'
import '../styles/header.scss'
import '../assets/logo_figma.png'

export default function Header() {
    return (
        <>
            <div className="header">
                <img src={require(`../assets/logo_figma.png`)} alt="Pinnacle Text logo"/>
            </div>
        </>
    )
}
