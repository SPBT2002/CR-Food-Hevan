import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles, setMenuOpened}) => {
    const navLinks = [
      { path: '/', name: 'Home' },
      { path: '/menu', name: 'Menu' },
      { path: '/blog', name: 'Blog' },
      { path: '/contact', name: 'Contact' },
    ]

  return (
    <nav className={containerStyles}>
      {navLinks.map((link) => (
        <NavLink onClick={() => setMenuOpened && setMenuOpened(false)} key={link.title} to={link.path} className={({isActive}) => '${isActive ? active-link" : ""} px-3 py-2 rounded-full uppercase text-sm font-bold'}>

        </NavLink>
      ))}
    </nav> 
  )
}

export default Navbar
