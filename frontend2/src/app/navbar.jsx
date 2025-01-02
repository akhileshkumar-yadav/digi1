'use client'
import Link from 'next/link'
import React from 'react'
import useAppContext from '@/context/appContext'

const Navbar = () => {
  const { loggedIn, logout } = useAppContext();
  return (
    <>
     <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-500/50">
  <img
    src="https://tailwindflex.com/public/favicon.ico"
    className="h-10 w-10"
    alt=""
  />
  <div className="flex md:hidden">
    <button id="hamburger">
      <img
        className="toggle block"
        src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
        width={48}
        height={48}
      />
      <img
        className="toggle hidden"
        src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
        width={48}
        height={48}
      />
    </button>
  </div>
  <div className="toggle hidden w-full md:w-auto md:flex text-right font-semibold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
    <Link
      href="/"
      className="block md:inline-block text-teal-900 hover:text-teal-700 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Home
    </Link>
    <Link
      href="/product"
      className="block md:inline-block text-teal-900 hover:text-teal-700 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Products
    </Link>
    <Link
      href="/pricing"
      className="block md:inline-block text-teal-900 hover:text-teal-700 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Pricing
    </Link>
    <Link
      href="/contactUs"
      className="block md:inline-block text-teal-900 hover:text-teal-700 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Contactus
    </Link>
    <Link
      href="/aboutUs"
      className="block md:inline-block text-teal-900 hover:text-teal-700 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      AboutUs
    </Link>
  </div>
  <Link
    href="/signup"
    className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded"
  >
    Create Account
  </Link>
</nav>
   
    </>
  )
}

export default Navbar