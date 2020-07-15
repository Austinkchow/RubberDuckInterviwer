import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './config/routes'
import './App.css'

function App(props) {

  return (
    <div className="App">
      <Header
      />
      <Routes
      />
      <Footer />
    </div>
  );
}

export default App 
