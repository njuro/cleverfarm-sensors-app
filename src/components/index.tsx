import React from 'react'
import './app.scss'
import Header from 'components/header/'
import logo from '../assets/img/react.png'

const Home = () => {
  return (
    <div className="container">
        <div className="header">
            <Header/>
            <h1>Welcome to React application</h1>
            <img src={logo}/>
        </div>
    </div>
  )
}

export default Home
