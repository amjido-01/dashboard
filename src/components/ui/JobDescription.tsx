"use client"
import React from 'react'
import Aside from './Aside';
import Preview from './Preview';
import Footer from './Footer';
const JobDescription = () => {
 
  return (
    <div className="px-[1rem] md:container md:pr-0 flex flex-col md:flex-row"> 
      <Preview />
    <div className="w-full hidden md:block md:w-[25%] bg-[#FCFCFC] p-[18px] border-l-[1px] border-t-[1px] border-[#E7E7E7]">
      <Aside />           
      </div>
  </div>
  )
}

export default JobDescription 