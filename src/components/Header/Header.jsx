import { Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './header.css'

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const {pathname} = useLocation()

  const changeNav = () => {
    if(window.scrollY >= 50){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <div style={{backgroundColor: scrollNav && '#000'}} className='header'>
      <div className="headerContainer" style={{padding: scrollNav && '20px 0'}}>
        <NavLink to='/'>
          <Typography 
            style={{fontWeight: '700', color: pathname === '/' ? '#fff' : scrollNav ? '#fff' : '#000'}}
            variant='h5'>
            Movies
          </Typography>
        </NavLink>
      </div>
    </div>
  )
}

export default Header
