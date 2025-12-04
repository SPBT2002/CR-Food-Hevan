import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/data'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 right-0 z-50 py-3'>
      {/* CONTAINER */}
      <div className='max-padd-container flexBetween'>
        {/* LOGO */}
        <div className='flex flex-1'>
          <Link to={'/'} className='flex items-end'>
            <img src={assets.logo} alt="Logo" className='h-29'/>
            <div>
              <span className='hidden sm:block font-extrabold text-3xl relative top-1 left-1'>CandRiya </span>
            <span className='hidden sm:block font-extrabold text-3xl relative top-1 left-1 tracking-[0.5px] text-solid'>FooD HevaN</span>
            </div>
          </Link>
        </div>
        {/* NAVBAR */}
        <div className='flex flex-1'>
          <Navbar />
        </div>
        {/* BUTTONS & PROFILE */}
        <div className='flex flex-1'>
          {/* Menu Taggle */}
          <div>
            <img src={assets.menu} alt="" className=''/>
            <img src={assets.menuClose} alt="" className=''/>
          </div>
          {/* Cart */}
          <div>
            <img src={assets.cartAdded} alt="" />
              <label htmlFor="">0</label>
          </div>
          {/* User Profile */}
          <button className='btn-solid flexCenter gap-2'>
            Login
            <img src={assets.user} alt="" className='invert w-5'/>
          </button>
        </div>
      </div>
    </header>
  
  )
}

export default Header
