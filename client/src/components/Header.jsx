import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/data'
import Navbar from './Navbar'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <header className='absolute top-0 left-0 right-0 z-50 py-3'>
      {/* CONTAINER */}
      <div className='max-padd-container flexBetween'>
        {/* LOGO */}
        <div className='flex flex-1'>
          <Link to={'/'} className='flex items-end'>
            <img src={assets.logo} alt="Logo" className='h-20'/>
            <div>
              <span className='hidden sm:block font-extrabold text-3xl relative tracking-[1px]'>CandRiya </span>
            <span className='hidden sm:block font-extrabold text-2xl relative bottom-2.5 left-0.5 tracking-[0.1px] text-solid'>FooD HevaN</span>
            </div>
          </Link>
        </div>
        {/* NAVBAR */}
        <div className='flexCenter flex-1'>
          <Navbar />
        </div>
        {/* BUTTONS & PROFILE */}
        <div className='flex flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8'>
          {/* Menu Taggle */}
          <div className='relative lg:hidden w-7 h-6'>
            <img src={assets.menu} alt="" className={'absolute inset-0 lg:hidden cursor-pointer transition-opacity duration-700 ${ menuOpened ? "opacity-0" : "opacity-100"}'} />
            <img src={assets.menuClose} alt="" className='' />
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
