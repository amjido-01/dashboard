import React from 'react'
import { JobTitle } from "@/components/ui/JobTitle";
import JobHeading from './JobHeading';
import AboutJob from './AboutJob';
import Footer from './Footer';
import Aside from './Aside';
const JobDescription = () => {
  return (
    <div className="container pr-0 flex flex-col md:flex-row gap-4"> 
    <div className="w-full md:w-[70%]">
        <JobHeading />
        <hr className='mt-[16px]'/>
        <div className='mt-[32px]'>
            <JobTitle />
        </div>
        <hr className='mt-[16px]'/>
        <div className='my-[32px]'>
            <AboutJob />
            </div>
            <hr className='mt-[16px]'/>
            <div className='mt-[32px]'>
              <Footer />
            </div>
    </div>
    <div className="w-full md:w-[30%] bg-[#FCFCFC] p-[24px] border-l-[1px] border-t-[1px] border-[#E7E7E7]">
      <Aside />           
      </div>
  </div>
  )
}

export default JobDescription 