import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/data'
import Navbar from './Navbar'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(prev=> !prev)

  return (
    <header className='absolute top-0 left-0 right-0 z-50 py-3'>
      {/* CONTAINER */}
      <div className='max-padd-container flexBetween'>
        {/* LOGO */}
        <div className='flex flex-1'>
          <Link to={'/'} className='flex items-end'>
            <img src={assets.logo} alt="HeaderLogo" className='h-23'/>
            <div>
              <span className='hidden sm:block font-extrabold text-3xl relative bottom-3 tracking-[1px]'>
              <span className='text-solid'>C</span>and<span className='text-solid'>R</span>iya 
              </span>
            <span className='hidden sm:block font-extrabold text-2xl relative bottom-5 left-0.5 tracking-[0.1px] text-solid'>FooD HevaN</span>
            </div>
          </Link>
        </div>
        {/* NAVBAR */}
        <div className='flexCenter flex-1'>
          <Navbar setMenuOpened={setMenuOpened} containerStyles={`${
  menuOpened ? 
  "flex items-start flex-col gap-y-4 fixed top-20 right-6 p-6 bg-white rounded-xl shadow-xl w-64 ring-1 ring-slate-900/5 z-50" : "hidden lg:flex gap-x-5 xl:gap-x-1 medium-15 p-1"
}`}/>
        </div>
        {/* BUTTONS & PROFILE */}
        <div className='flex flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8'>
          {/* Menu Toggle */}
          <div className='relative lg:hidden w-7 h-6'>
            <img onClick={toggleMenu} src={assets.menu} alt="" className={`absolute inset-0 lg:hidden cursor-pointer transition-opacity duration-700 ${menuOpened ? "opacity-0" : "opacity-100"}`} />

            <img onClick={toggleMenu} src={assets.menuClose} alt="" className={`absolute inset-0 lg:hidden cursor-pointer transition-opacity duration-700 ${menuOpened ? "opacity-100" : "opacity-0"}`} />
          </div>
          {/* Cart */}
          <div className='relative cursor-pointer'>
            <img src={assets.cartAdded} alt="" className='min-w-11 bg-white rounded-full p-2'/>
              <label className="absolute bottom-10 right-1 text-xs font-bold bg-solid text-white flexCenter rounded-full w-9">0</label>
          </div>
          {/* User Profile */}
          <div>
            <button className='btn-solid flexCenter gap-2'>
              Login
              <img src={assets.user} alt="" className='invert w-5'/>
            </button>
          </div>
        </div>
      </div>
    </header>
  
  )
}

export default Header
