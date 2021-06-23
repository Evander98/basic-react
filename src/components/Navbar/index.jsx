import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{height: '80px', backgroundColor: 'red', display: 'flex', justifyContent: 'space-between'}}>
      <Link to='/' style={{color: 'black', textDecoration: 'none'}}>home</Link>
      <Link to='/services' style={{color: 'black', textDecoration: 'none'}}>services</Link>
      <Link to='/about' style={{color: 'black', textDecoration: 'none'}}>about</Link>
    </div>
  )
}

export default Navbar
