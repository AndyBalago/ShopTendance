import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='title'>
        <Link to='/'>
            <AiFillHome className='home'/>
        </Link>
        </div>
    </div>
  )
}

export default NavBar