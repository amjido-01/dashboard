import React from 'react'
import { JobTitle } from "@/components/ui/JobTitle";
import JobHeading from './JobHeading';
import AboutJob from './AboutJob';
import Footer from './Footer';
const JobDescription = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-4 mt-[36px]"> 
    <div className="w-full md:w-[70%]">
        <JobHeading />
        <hr className='mt-[16px]'/>
        <div className='mt-[32px]'>
            <JobTitle />
        </div>
        <hr className='mt-[16px]'/>
        <div className='mt-[32px]'>
            <AboutJob />
            </div>
            <hr className='mt-[16px]'/>
            <div className='mt-[32px]'>
              <Footer />
            </div>
    </div>
    <aside className="w-full md:w-[30%] border-2 border-red-500"></aside>
  </div>
  )
}

export default JobDescription 