"use client";
import React from 'react';
import { Button } from './button';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from './Icon';

const navLnks = [
    {
        name: "Jobs",
        path: "/",
        icon: "briefcase",
        extension: "svg",
        width: 24,
        height: 24
    },
    {
        name: "Messages",
        path: "/about",
        icon: "message",
        extension: "svg",
        width: 24,
        height: 24
    },
    {
        name: "Payments",
        path: "/services",
        icon: "coinshand",
        extension: "svg",
        width: 24,
        height: 24
    }
]

   

const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className="bg-white h-[109px] fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className='mx-auto h-full items-center flex max-w-screen-xl'>
        <div className=" h-[90px] flex items-center justify-between mx-auto py3 px-4 w-full">
        <div>
       <span className='bg-[#E7E7E7] px-[24px] py-[17px] text-[20px] leading-[27px] font-medium text-[#DC4A2D]'>Logo</span>
        </div>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className='flex items-center justify-center gap-[16px]'>   
        <Icon width={23} height={23} icon="bell" alt="Logo" extension="svg" />
        <div className='flex items-center justify-center gap-[2px]'>
        <Icon width={40} height={40} icon="Rectangle" alt="Logo" extension="svg" />
        <Icon width={20} height={20} icon="chevron" alt="Logo" extension="svg" />

        </div>
        
    
        </div>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>
    <div className="items-center rounded-[40px] px-[8px] h-full border-[0.5px] border-[#D1D1D1] justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
        <ul className="flex items-center gap-[64px] px-[20px] font-medium border border-gray-100 rounded-lg bg-white md:border-0">
            {navLnks.map((navLnk, index) => (
                <li key={index}>
                    <Link href={navLnk.path} className={`flex gap-[8px] items-center text-[20px] leading-[27px] ${pathname === navLnk.path ? 'text-[#FFFFFF] bg-[#DC4A2D] font-medium border-[2px] border-[#FCB4A5] rounded-[49px] p-[16px]' : 'text-[#B0B0B0]'}`}>
                            <Icon width={navLnk.width} height={navLnk.height} icon={navLnk.icon} alt={navLnk.name} extension={navLnk.extension} />
                            <span>{navLnk.name}</span>
                    </Link>
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