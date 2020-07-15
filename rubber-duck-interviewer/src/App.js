import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './config/routes'
import './App.css'

class App extends Component {
  state = {
    currentUser: '',

  }
  storeUser = (userId) => {
    this.setState({ currentUser: userId })
  }
  render() {
    return (
      <div className="App" >
        <Header
          currentUser={this.state.currentUser}
        />
        <Routes
          storeUser={this.storeUser}
          currentUser={this.state.currentUser}
        />
        <Footer />
      </div>
    );
  }
}

export default App 
