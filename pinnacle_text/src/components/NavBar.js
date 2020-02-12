import React from 'react'

export default class NavBar extends React.Component {
    render() {
        return (
            <div id="nav">
                <button onClick={() => this.setState({ location: "home"})}>Home</button>
                <button onClick={() => this.setState({ location: "aboutMe"})}>About Me</button>
                <button onClick={() => this.setState({ location: "services"})}>Services</button>
            </div>
        )
    }
}