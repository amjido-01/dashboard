import React from 'react'

const AboutJob = () => {
  return (
    <div>
        <h3 className='text-[14px] font-medium leading-[18.9px] text-[#6E6D6D]'>About the Job</h3>
        
<ol className="text-[#6E6D6D] list-decimal list-inside text-[15px] leading-[28px]">
    <li>
        <span>Handle the UI/UX research design</span>
    </li>
    <li>
        <span>Work on researching on latest web application design & trends</span>
    </li>
    <li>
       <span>Work on conceptualizing and visualizing</span>
    </li>
    <li>
       <span>Work on conceptualizing and visualizing</span>
    </li>
</ol>


<ol className=" list-none text-[#6E6D6D] list-inside text-[15px] leading-[28px]">
   <li>
    <span className='text-[#3D3D3D] text-[16px] font-medium leading-[28px]'>Benefits:</span>
      <ul className="ps-5 list-disc list-outside">
         <li>Health Insurance</li>
         <li>Provident Fund</li>
      </ul>
   </li>
   <li>
    <span className='text-[#3D3D3D] text-[16px] font-medium leading-[28px]'>Schedule:</span>
      <ul className="ps-5 space-y-1 list-disc list-outside">
         <li>Day shift.</li>
      </ul>
   </li>
   <li>
    <span className='text-[#3D3D3D] text-[16px] font-medium leading-[28px]'>Supplemental pay types:</span>
      <ul className="ps-5 space-y-1 list-disc list-outside">
         <li>Performance bonus</li>
         <li>Yearl bonus</li>
      </ul>
   </li>
   <li>
    <span className='text-[#3D3D3D] text-[16px] font-medium leading-[28px]'>Work location: In person</span>
   </li>
</ol>

    </div>
  )
}

export default AboutJob