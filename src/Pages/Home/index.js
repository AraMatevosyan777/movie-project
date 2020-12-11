import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <div className='home'>
      <div className='homeContent'>
        <h1>movie finder</h1>
        <div>
          <NavLink to="/series">series</NavLink>
          <NavLink to="/movies">movies</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
