import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import UserModel from './models/user'
import Routes from './config/routes'
import './App.css'

function App(props) {
  const [currentUser, setCurrentUser] = React.useState(localStorage.getItem('uid'))

  const storeUser = (userId) => {
    setCurrentUser(userId)
    localStorage.setItem('uid', userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        props.history.push('/login')
      })
  }

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        logout={logout}
      />
      <Routes
        currentUser={currentUser}
        storeUser={storeUser}
      />
      <Footer />
    </div>
  );
}

export default App 
