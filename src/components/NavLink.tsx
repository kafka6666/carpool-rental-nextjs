"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ModeToggle from './ModeToggle'

interface NavLinkProps {
  showModeToggle?: boolean;
}

const navlinks = [
  { href: "/", label: "Home" },
  // { href: "/booking", label: "Booking" },
  { href: "/local", label: "Local" },
  { href: "/services", label: "Services" },
  { href: "/our-fleet", label: "Our Fleet" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
]

const NavLink = ({ showModeToggle = false }: NavLinkProps) => {
  const pathname = usePathname()
  return (
    <div 
      className="flex gap-6 items-center flex-col md:flex-row bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto py-4 md:py-0 z-10 shadow-md md:shadow-none"
    >
      {navlinks.map((link) => (
        <Link 
          key={link.href} 
          href={link.href} 
          className={
            `text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200` +
            (link.href === pathname ? " text-orange-500 dark:text-orange-500" : "")
          }
        >
          {link.label}
        </Link>
      ))}
      
      {/* Show ModeToggle in mobile view */}
      {showModeToggle && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 w-full flex justify-center">
          <div className="flex items-center">
            <span className="mr-2 text-gray-500 dark:text-gray-300">Theme:</span>
            <ModeToggle />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavLink
