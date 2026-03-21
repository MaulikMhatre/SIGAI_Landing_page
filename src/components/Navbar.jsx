"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[85%] lg:w-[70%] px-6 py-3 
                    rounded-3xl shadow-lg backdrop-blur-xl bg-white/10 border border-white/20">
      <div className="flex items-center justify-between w-full">
        
        <Link href="/" className="flex items-center">
          {/* <Image
            src="/nav_logo2.png"
            alt="logo"
            width={42}
            height={42}
            className="h-10 w-auto"
          /> */}
          <img src="/nav_logo2.png" alt="logo" className='w-40 h-10'/>
        </Link>
        
        <ul className="hidden md:flex items-center primary-font space-x-10">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-lg pb-1 tracking-wide relative group transition-all duration-300 ease-in-out"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>



        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg">
          <ul className="flex flex-col space-y-4 p-6 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white text-lg tracking-wide block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
