import React from 'react'
import JobHeading from '@/components/ui/JobHeading'
import { JobTitle } from '@/components/ui/JobTitle'
import AboutJob from '@/components/ui/AboutJob'
import Footer from '@/components/ui/Footer'
import Aside from './Aside'
const Preview = () => {
  return (
    <div className="w-full md:w-[75%] md:border-r-[1px]">

    <div className=''>
    <JobHeading />
    <hr className='mt-[30px] mb-[20px]'/>
    <div className='mt[32px]'>
        <JobTitle />
    </div>
    <hr className='mt-[16px]'/>

    <div className='my-[32px]'>
        <AboutJob />
        </div>
    </div>
    <div className="w-full block md:hidden md:w-[25%] bg-[#FCFCFC] p-[18px] border-l-[1px] border-t-[1px] border-[#E7E7E7]">
      <Aside />           
      </div>
    <div className='mt-[32px] container'>
              <Footer />
        </div>
</div>
  )
}

export default Preview