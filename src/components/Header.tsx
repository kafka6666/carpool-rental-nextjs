"use client";

import Logo from './Logo'
import ModeToggle from './ModeToggle'
import NavLink from './NavLink'
import MenuButton from './MenuButton'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav 
      className="flex justify-between items-center px-[2%] md:px-[2%] h-16 shadow-md sticky top-0 dark:bg-gray-800 dark:text-white dark:shadow-gray-800"
    >
      <Logo />
      {/* NavLink will only be visible on mobile when open is true */}
      <div className={`${open ? 'block' : 'hidden'} md:block`}>
        <NavLink showModeToggle={true} />
      </div>
      {/* Only show ModeToggle on desktop */}
      <div className="hidden md:block">
        <ModeToggle />
      </div>
      <MenuButton open={open} setOpen={setOpen} />
    </nav>
  )
}

export default Header