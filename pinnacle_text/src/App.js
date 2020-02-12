import React from 'react';

import HomeView from './components/HomeView';
import AboutMe from './components/AboutMe';
import ServicesView from './components/ServicesView';
import NavBar from './components/NavBar';

export default class App extends React.Component {
  state = {
    location: "home"
  }

  getView() {
    switch (this.state.location) {
      case 'home':
        return <HomeView/>
      case 'aboutMe':
        return <AboutMe/>
      case 'services':
        return <ServicesView/>
      default:
        return null
    }
  }

  render () {
    return (
      <div className="App">
        <div id="nav">
          <button onClick={() => this.setState({ location: "home"})}>Home</button>
          <button onClick={() => this.setState({ location: "aboutMe"})}>About Me</button>
          <button onClick={() => this.setState({ location: "services"})}>Services</button>
        </div>

        <header className="App-header">
          <div>
            { this.getView() }
          </div>
        </header>
      </div>
    );
  }
}
