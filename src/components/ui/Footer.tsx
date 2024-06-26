import React from 'react'
import Icon from './Icon'
const Footer = () => {
  return (
    <footer className="bg-white border-2 border-red-500">
    <div className=" mx-auto border-2 border-red-500">
        <div className='flex items-center gap-[12px] mb-[16px]'>
            <Icon width={35} height={35} icon="footer" alt='logo' extension='png' />
            <h4 className='text-[18px] font-medium leading-[27px] text-[#4F4F4F]'>Atlassian</h4>
        </div>
        <div className=" flex gap-[48px]">

                <div className="flex flex-col border-2 border-red-500 items-start mt-5 space-y-2">
                    <div className='mb-[16px]'>
                        <p className='text-[#6E6D6D] text-[14px] font-medium leading-[18px]'>Company size</p>
                        <p className='text-[#3D3D3D] text-[14px] leading-[21px] font-medium mt-[5px]'>1k - 2k Employees</p>
                    </div>
                    <div className='mb-[16px]'>
                        <p className='text-[#6E6D6D] text-[14px] font-medium leading-[18px]'>Sector</p>
                        <p className='text-[#3D3D3D] text-[14px] leading-[21px] font-medium mt-[5px]'>Information Technology, Infrastructure</p>
                    </div>
                    <div>
                        <p className='text-[#6E6D6D] text-[14px] font-medium leading-[18px]'>Founded In</p>
                        <p className='text-[#3D3D3D] text-[14px] leading-[21px] font-medium mt-[5px]'>2019</p>
                    </div>
                </div>

            <div>

                <div className="flex flex-col border-2 border-red-500 items-start mt-5 space-y-2">
                    <div className='mb-[16px]'>
                        <p className='text-[#6E6D6D] text-[14px] font-medium leading-[18px]'>Type</p>
                        <p className='text-[#3D3D3D] text-[14px] leading-[21px] font-medium mt-[5px]'>Private</p>
                    </div>
                    <div className='mb-[16px]'>
                        <p className='text-[#6E6D6D] text-[14px] font-medium leading-[18px]'>Funding</p>
                        <p className='text-[#3D3D3D] text-[14px] leading-[21px] font-medium mt-[5px]'>Bootstrapped</p>
                    </div>
                    <div className='mb-[16px] border-2 border-red-500'>
                        <p className='text-[#6E6D6D] text-[14px] font-medium leading-[18px]'>Founded By</p>
                        <p className='text-[#3D3D3D] text-[14px] leading-[21px] font-medium mt-[5px]'>Scott Farquhar, Mike Cannon-Brookes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer