import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>
            <Link to='/'>Malice Mizer</Link>
        </div>
        <div className='links'>
            <Link to='/members'>Members</Link>
            <Link to='/bandinfo'>BandInfo</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/favourites'>Favourites</Link>
        </div>
    </div>
  )
}
