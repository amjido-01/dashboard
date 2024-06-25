import React from 'react';
import { Button } from './button';
import Link from 'next/link';

const navLnks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Services",
        path: "/services"
    }
]
const Navbar = () => {
  return (
    <nav className="bg-white h-[109px] fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className='mx-auto border-black border-2 h-full items-center flex max-w-screen-xl'>
        <div className=" border-2 border-green-500 h-[90px] flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <div>
       <Button className='bg-[#E7E7E7] text-[#DC4A2D]'>Logo</Button>
        </div>
    <div className="flex border-2 border-red-500 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>
    <div className="items-center rounded-[36px] border-2 border-red-500 justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLnks.map((navLnk, index) => (
                <li key={index}>
                    <Button asChild>
                        <Link href={navLnk.path}>{navLnk.name}</Link>
                    </Button>
                </li>
            ))}
        </ul>
    </div>
    </div>
        </div>
   
    </nav>

  )
}

export default Navbar